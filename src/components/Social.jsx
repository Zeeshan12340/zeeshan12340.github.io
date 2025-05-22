import React from 'react';

function Social() {
  const customSites = [
    {
      network: 'github',
      href: 'https://github.com/zeeshan12340',
      iconUrl: '/images/logos/github.png',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '50px',
        borderRadius: '50%',
      },
    },
    {
      network: 'discord',
      href: 'https://discord.com/users/717250576747986955',
      iconUrl: '/images/logos/discord.png',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '50px',
        borderRadius: '50%',
      },
    },

    {
      network: 'email',
      href: 'mailto:mayub9799@gmail.com',
      iconUrl: '/images/logos/email.png',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '50px',
        borderRadius: '50%',
      },
    },
    {
      network: 'pwn.college',
      href: 'https://pwn.college/hacker/4912',
      iconUrl: 'https://avatars.githubusercontent.com/u/42601809?s=500',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '50px',
        borderRadius: '50%',
      },
    },
    {
      network: 'buymeacoffee',
      href: 'https://buymeacoffee.com/zeeshan1234',
      iconUrl: '/images/logos/buymeacoffee.png',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '50px',
        maxHeight: '50px',
        borderRadius: '50%',
      },
    }
  ];

  return (
    <div className="social">
      {customSites.map((site) => (
        <a
          key={site.network}
          href={site.href}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={site.iconUrl}
            alt={site.network}
            style={site.style}
          />
        </a>
      ))}
    </div>
  );
}

export default Social;
