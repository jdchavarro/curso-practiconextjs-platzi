import '@styles/globals.css';
import AppContext from '@context/AppContext';
import useInicialState from 'hooks/useInitialState';
import Header from "@components/Header";

function MyApp({ Component, pageProps }) {
  const inicialState = useInicialState();
  return (
    <AppContext.Provider value={inicialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
