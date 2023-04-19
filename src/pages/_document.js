import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>React Shop</title>
      <link rel='manifest' href='/manifest.json' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
