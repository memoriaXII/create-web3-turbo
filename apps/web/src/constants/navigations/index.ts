enum Path {
  ROOT = '/',
  MARKETS = '/markets',
}

export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  openAIKey: process.env.OPENAI_API_KEY ?? '',
  statusPage: process.env.STATUS_PAGE_ID ?? '',
};

export const URL = 'https://example.com';

export const navItems = [
  { name: 'Home', path: Path.ROOT },
  { name: 'Markets', path: Path.MARKETS },
];

export const footerItems = {
  resources: [
    { path: '/', name: 'Documentation', internal: true },
    { path: '/', name: 'Support', internal: true },
    { path: '/', name: 'Contact Us', internal: true },
  ],
  company: [
    { path: '/', name: 'Home', internal: true },
    { path: '/blog', name: 'Blog', internal: true },
    { path: '/', name: 'Careers', internal: true },
  ],
  legal: [
    { path: '/privacy', name: 'Privacy Policy', internal: true },
    { path: '/terms', name: 'Terms of Service', internal: true },
    { path: '/cookies', name: 'Cookies', internal: true },
  ],
};
