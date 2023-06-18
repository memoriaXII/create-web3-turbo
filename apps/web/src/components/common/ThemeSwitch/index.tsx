'use client';

import { Button } from 'components/ui';
import useIsMounted from 'hooks/common/useIsMounted';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <>
      {theme === 'light' ? (
        <Button
          variant='ghost'
          id='dark'
          aria-label='Dark Theme'
          className='flex h-12 w-12 items-center justify-center  rounded-full text-black hover:transition-all'
          onClick={(e) => setTheme('dark')}
        >
          <Image
            src='/svgs/common/dark-moon.svg'
            alt='moon'
            width={24}
            height={24}
          />
        </Button>
      ) : (
        <Button
          variant='ghost'
          id='light'
          aria-label='Light Theme'
          className='bg-lightGray flex h-12 w-12 items-center  justify-center rounded-full text-black hover:transition-all'
          onClick={(e) => setTheme('light')}
        >
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        </Button>
      )}
    </>
  );
};
