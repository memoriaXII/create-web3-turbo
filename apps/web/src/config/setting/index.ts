export const PLATFORM: {
  AVATAR_API_KEY: string; // avatar api key for platform
  APP_NAME: string;
  TOKEN_NAME: string;
  WEB3AUTH_CLIENT_ID: string;
  RECAPTCHA_KEY: string;
  SENTRY_DSN: string;
} = {
  SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN || '',

  AVATAR_API_KEY: process.env.NEXT_PUBLIC_AVATAR_API_KEY || '',
  APP_NAME: process.env.NEXT_PUBLIC_PLATFORM_APP_NAME || '',
  TOKEN_NAME: process.env.NEXT_PUBLIC_PLATFORM_TOKEN_NAME || '',
  RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY || '',
  WEB3AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
};

export const LOCAL_STORAGE_KEYS = {
  REFRESH_TOKEN_KEY: 'refresh_token',
  ACCESS_TOKEN_KEY: 'access_token',
  LOGIN_TYPE: 'login_type',
  CONFIG: 'default_config',
  THEME: 'theme',
};
