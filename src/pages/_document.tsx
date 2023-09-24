import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export const Document = () => (
  <Html lang='en'>
    <Head>
      <meta charSet='UTF-8' />
      <meta property='og:title' content='Gregory Nathan Jinsoo Monroe' />
      <meta property='og:url' content='https://www.jinsoo.co' />
      <meta property='og:type' content='website' />
      <meta
        name='description'
        content='I am a frontend engineer based in Seoul.'
      />
      <meta
        property='og:description'
        content='I am a frontend engineer based in Seoul.'
      />
      <meta property='og:locale' content='en-US' />
      <meta property='article:published_time' content='2014-08-26' />
      <meta property='og:updated_time' content='2023-09-24' />
      <meta property='article:modified_time' content='2023-09-24' />

      <link rel='icon' href='/favicon.ico' />
      <link
        rel='stylesheet'
        as='style'
        crossOrigin=''
        href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css'
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
