import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import WagmiProvider from 'providers/WagmiProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <WagmiProvider>
    <Component {...pageProps} />
  </WagmiProvider>
);

export default MyApp;
