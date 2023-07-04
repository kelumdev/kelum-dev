import Script from 'next/script';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
    <Component {...pageProps} />
    </>
  );
};

export default App;