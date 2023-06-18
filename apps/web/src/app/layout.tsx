import 'styles/globals.scss';
import RootProvider from './providers';
import { BaseLayout } from 'components/layout';
import { Inter } from 'next/font/google';
import { Metadata } from 'next/types';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: {
    default: 'create-web3-turbo',
    template: '%s | create-web3-turbo',
  },
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus hic a mollitia. Dolorem, distinctio cumque! Labore vitae hic voluptatum. Doloremque optio unde earum dolore repudiandae doloribus itaque reiciendis voluptate.',
  openGraph: {
    title: 'create-web3-turbo',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente possimus hic a mollitia. Dolorem, distinctio cumque! Labore vitae hic voluptatum. Doloremque optio unde earum dolore repudiandae doloribus itaque reiciendis voluptate.',
    url: process.env.NEXT_PUBLIC_PUBLIC_URL || 'http://localhost:3000',
    siteName: 'create-web3-turbo',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true, // Prevents search engines from showing snippets of the page in search results.
    noimageindex: true,
    nocache: true, //Prevents search engines from caching the page.
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable}`}>
      <body>
        <RootProvider>
          <BaseLayout>
            {children}
            <Toaster
              toastOptions={{
                position: 'bottom-center',
                duration: 3000,
              }}
            />
          </BaseLayout>
        </RootProvider>
      </body>
    </html>
  );
}
