export const DOMAIN_URL: { API: string; MULTI_AVATAR: string; IMAGE: string } =
  {
    API: process.env.REACT_APP_API_DOMAIN || "https://dev.socol.fans/apis",
    MULTI_AVATAR: "https://api.multiavatar.com",
    IMAGE:
      process.env.REACT_APP_IMAGE_DOMAIN ||
      "https://content-edge.sysop4958.workers.dev",
  };

export const PLATFORM: {
  AVATAR_API_KEY: string; // avatar api key for platform
  APP_NAME: string;
  TOKEN_NAME: string;
  WEB3AUTH_CLIENT_ID: string;
  RECAPTCHA_KEY: string;
  SENTRY_DSN: string;
} = {
  SENTRY_DSN:
    process.env.REACT_APP_SENTRY_DSN ||
    "https://2d1b6b7e66894e33a77652ced82d7bd3@o4503993633079296.ingest.sentry.io/4503993634914304",

  AVATAR_API_KEY: process.env.REACT_APP_AVATAR_API_KEY || "E8xCWPdZYV4ojQ",
  APP_NAME: process.env.REACT_APP_PLATFORM_APP_NAME || "SOCOL",
  TOKEN_NAME: process.env.REACT_APP_PLATFORM_TOKEN_NAME || "SOCOL",
  RECAPTCHA_KEY:
    process.env.REACT_APP_RECAPTCHA_KEY ||
    "6Lc92QkhAAAAAC6sbA8VT0lmC2UT8LRGrHu_pzIt",
  WEB3AUTH_CLIENT_ID:
    process.env.REACT_APP_WEB3AUTH_CLIENT_ID ||
    "BGRBbB8vPdqaR-zUugcV_Y1FQWrlCsV6fpSbc10tfm10kf9ZB2_mit0ATS3wiFPQkAVZ5tk9j_F7AAd2JjFEJ_k",
};

export const LOCAL_STORAGE_KEYS = {
  REFRESH_TOKEN_KEY: "refresh_token",
  ACCESS_TOKEN_KEY: "access_token",
  LOGIN_TYPE: "login_type",
  HIDE_BECOME_CREATOR_BANNER: "hide_become_creator_banner",
  CONFIG: "default_config",
  THEME: "theme",
  JOINED_COMMUNITIES: "joined_communities",
};

export const SIZE_LIMIT = {
  QUERY: 50,
  IMAGE_MAX: 5 * 1024 ** 2, // 5Mb,
  VIDEO_MAX: 100 * 1024 ** 2, // 100Mb,
  IMAGES_TO_UPLOAD: 9, // 9 files per upload,
  IMAGES_PER_COLLECTION: 25,
  FEED_TEXT_LENGTH: 10240,
  MESSAGE_TEXT_LENGTH: 250,
};

export const MESSAGE_LIMIT = 3;
export const MESSAGE_MIN_PRICE = 0.001;
export const MESSAGE_MAX_PRICE = Number.MAX_SAFE_INTEGER;
