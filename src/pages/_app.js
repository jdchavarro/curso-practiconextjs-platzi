import AppContext from '@context/AppContext';
import useInicialState from 'hooks/useInitialState';
import Header from '@components/Header';
import Script from 'next/script';

import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const inicialState = useInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QFZBDE9N10" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QFZBDE9N10');
      `}
      </Script>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
