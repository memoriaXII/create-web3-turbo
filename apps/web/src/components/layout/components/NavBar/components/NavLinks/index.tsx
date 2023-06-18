'use client';

import { Button } from 'components/ui';
import { navItems } from 'constants/navigations';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from 'utils/formatter';


type TNavLinks = {
  name: string;
  path: string;
};

export const NavLinks = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeItem, setActiveItem] = useState<TNavLinks | undefined>();

  const handleItemClick = (item: TNavLinks) => {
    setActiveItem(item);
    router.push(item.path);
  };

  useEffect(() => {
    const item = navItems.find((item) => item.path === pathname);
    if (item) {
      setActiveItem(item);
    }
  }, [pathname]);

  return (
    <ul className='ml-8 flex'>
      {navItems.map((menuItem) => (
        <li
          className={`mr-1 ${
            activeItem?.name === menuItem.name
              ? 'rounded-full bg-lightGray text-black hover:bg-lightGray/70'
              : 'text-black/50'
          }`}
          key={menuItem.name}
        >
          <Button
            variant='ghost'
            disabled={menuItem.name === 'Market'}
            className={cn(
              activeItem?.name === menuItem.name
                ? 'text-black'
                : 'text-black/50',
              'text-base leading-6 font-medium'
            )}
            onClick={() => handleItemClick(menuItem)}
          >
            {menuItem.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};