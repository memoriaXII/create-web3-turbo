import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { goerli } from 'wagmi/chains';
import WagmiProvider from './WagmiProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const { chains } = configureChains([goerli], [publicProvider()]);

  return (
    <WagmiProvider>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiProvider>
  );
};

export default MyApp;
