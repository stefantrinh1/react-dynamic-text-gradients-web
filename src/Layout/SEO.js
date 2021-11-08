import React from 'react';
import Helmet from 'react-helmet';

function SEO({ title, description, url, ogImage, twitterUsername, favicon }) {
  return (
    <Helmet title={title}>
      <meta name='description' content={description} />
      <meta name='image' content={ogImage} />
      {url && <meta property='og:url' content={url} />}

      {title && <meta property='og:title' content={title} />}

      {description && <meta property='og:description' content={description} />}

      {ogImage && <meta property='og:image' content={ogImage} />}

      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {title && <meta name='twitter:title' content={title} />}
      {description && <meta name='twitter:description' content={description} />}
      {ogImage && <meta name='twitter:image' content={ogImage} />}

      <link rel='apple-touch-icon' href={favicon} />
      <link rel='icon' href={favicon} size='16x16' type='image/png'></link>
    </Helmet>
  );
}
export default SEO;
