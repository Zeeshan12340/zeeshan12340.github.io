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
        backgroundColor: 'white',
        padding: '4px',
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
        backgroundColor: 'white',
        padding: '4px',
      },
    }
  ];

  return (
    <div className="social">
      {customSites.map((site) => (
        <a
          key={site.network}
          className="social-icon"
          href={site.href}
          target="_blank"
          rel="noreferrer"
          aria-label={site.network}
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
