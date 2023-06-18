import { INetwork } from 'types/common';

type TResult = {
  supportedNetworks: INetwork[];
};

const useConfig = (): TResult => {
  return {
    supportedNetworks: [
      {
        chainId: 5,
        name: 'ethereum goerli testnet',
        explorerUrl: 'https://goerli.etherscan.io/tx',
      },
    ],
  };
};

export default useConfig;
