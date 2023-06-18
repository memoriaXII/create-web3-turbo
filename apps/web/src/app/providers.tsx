import ApolloWrapper from 'providers/apollo';
import QueryProvider from 'providers/react-query';
import ThemeInitProvider from 'providers/theme';
import WagmiProvider from 'providers/wagmi';
import { ReactNode } from 'react';
import { Providers } from 'redux/provider';

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Providers>
      <ApolloWrapper>
        <QueryProvider>
          <WagmiProvider>
            <ThemeInitProvider>{children}</ThemeInitProvider>
          </WagmiProvider>
        </QueryProvider>
      </ApolloWrapper>
    </Providers>
  );
};

export default RootProvider;
