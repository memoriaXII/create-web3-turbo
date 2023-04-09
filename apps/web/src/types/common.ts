export interface INetwork {
  chainId: number;
  name: string;
  explorerUrl: string;
}

export interface IStakingConifg {
  tokenName: string;
  tokenImage: string;
  tokenAddress: string;
  startDay: number;
  network: string;
  chainId: number;
  contract: string;
}

export interface ITimeDurationData {
  hoursStr: string;
  minutesStr: string;
  secondsStr: string;
}
export interface IConfig {
  maxAllowedTags: number;
  attributesMaxSize: number;
  contentEdge: string;
  allowedTags: string[];
  communityPrice: string;
  supportedNetworks: INetwork[];
  gasLimits: { blindBox: number };
  messages: { tierPassRevealed: string; setupTierPassMobile: string };
  waitingBlocks: {
    tierPass: number;
    blindBoxTierPassSetup: number;
    soPrivateBid: number;
    soPrivateAccept: number;
    communityCreation: number;
    soPrivateWithdraw: number;
  };
  signUtils: {
    domain: string;
    networks: {
      [key: string]: {
        address: string;
        tierPass: string;
        version: string;
      };
    };
  };
  wordLimits: {
    communityDescription: number;
  };
  disabledFeatures: DisabledFeaturesEnum[];
  countLimits?: {
    imagesPerCollection?: number;
  };
  videoCDNs: string[];
  sizeLimits: {
    maxImageSize: number;
    maxVideoSize: number;
  };
  stakings: IStakingConifg[];
}

export interface IUserProfile {
  displayName?: string;
  avatarUrl?: string;
  profileImage?: File;
  description?: string;
  email?: string; // TODO: not in use now, integrate later
}
export interface IUser {
  id: number;
  userid?: number;
  displayName: string;
  avatarUrl: string;
  description: string;
  email: string;
  address?: string;
  createdTimestamp: string;
  updatedTimestamp: string;
}
export interface IPagingParams {
  size?: number;
  nextId?: number | null;
}
export enum LoginTypeEnum {
  Web3Auth = 'web3auth',
  Metamask = 'metaMask',
  Coinbase = 'coinbaseWallet',
  WalletConnect = 'walletConnect'
}

export enum DateTimeFormat {
  FullDateTime = 'YYYY/MM/DD hh:mm A',
  MonthDateTime = 'MM/DD hh:mm A',
  FormalDate = 'dddd, MMMM Do',
  TimeOnly = 'h:mm A',
  TimeIn24 = 'HH:mm'
}

export type TTokenInfo = {
  formatted: string;
  symbol: string;
};

export enum DisabledFeaturesEnum {
  Dashboard = 'dashboard',
  Staking = 'staking',
  ExternalStaking = 'external-staking',
  Airdrop = 'airdrop'
}
export interface IChannelMember {
  avatarUrl: string;
  displayName: string;
  userid: number;
}
