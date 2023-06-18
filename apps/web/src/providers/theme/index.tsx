'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import { ThemeProvider } from 'next-themes';

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
const ThemeInitProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute='class'>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ThemeProvider>
  );
};

export default ThemeInitProvider;
