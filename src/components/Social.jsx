import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import endpoints from '../constants/endpoints';
import social from '../constants/social.json';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(social);
  }, []);

  const customSites = [
    {
      network: 'hackthebox',
      href: 'https://app.hackthebox.com/users/348120',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAYaFuZb0d9f3OLGAoUAbeyrFHiWNTtD5LrYmXfDzow&s',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '60px',
        borderRadius: '50%',
      },
    },
    {
      network: 'tryhackme',
      href: 'https://tryhackme.com/p/Zeeshan1234',
      iconUrl: 'data:image/jpeg;base64,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',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '60px',
        borderRadius: '50%',
      },
    },
    {
      network: 'pentesterlab',
      href: 'https://pentesterlab.com/profile/Zeeshan1234',
      iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_rab7QbwdKkFEPCC9YT9_FVUHEccfnlrJw6nw366dw&s',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '60px',
        borderRadius: '50%',
      },
    },
    {
      network: 'pwn.college',
      href: 'https://pwn.college/p/4912',
      iconUrl: 'https://avatars.githubusercontent.com/u/42601809?s=500',
      style: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        width: '60px',
        borderRadius: '50%',
      },
    },
  ];

  return (
    <div className="social">
      {data ? data.social.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          // bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      )) : null}

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
