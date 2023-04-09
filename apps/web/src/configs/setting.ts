export const PLATFORM: {
  AVATAR_API_KEY: string; // avatar api key for platform
  APP_NAME: string;
  TOKEN_NAME: string;
  WEB3AUTH_CLIENT_ID: string;
  RECAPTCHA_KEY: string;
  SENTRY_DSN: string;
} = {
  SENTRY_DSN: process.env.REACT_APP_SENTRY_DSN || '',
  AVATAR_API_KEY: process.env.REACT_APP_AVATAR_API_KEY || '',
  APP_NAME: process.env.REACT_APP_PLATFORM_APP_NAME || '',
  TOKEN_NAME: process.env.REACT_APP_PLATFORM_TOKEN_NAME || '',
  RECAPTCHA_KEY: process.env.REACT_APP_RECAPTCHA_KEY || '',
  WEB3AUTH_CLIENT_ID: process.env.REACT_APP_WEB3AUTH_CLIENT_ID || ''
};

export const LOCAL_STORAGE_KEYS = {
  REFRESH_TOKEN_KEY: 'refresh_token',
  ACCESS_TOKEN_KEY: 'access_token',
  LOGIN_TYPE: 'login_type',
  HIDE_STAKING_INTRO: 'hide_staking_intro',
  HIDE_BECOME_CREATOR_BANNER: 'hide_become_creator_banner',
  CONFIG: 'default_config',
  THEME: 'theme'
};
