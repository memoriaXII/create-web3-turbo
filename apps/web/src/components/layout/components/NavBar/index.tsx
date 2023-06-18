import { NavLinks, WalletButton } from './components';
import { ThemeSwitch } from 'components/common';
import Image from 'next/image';

export const NavBar: React.FC = () => {
  return (
      <div className='flex w-full border-b border-[#CFD9E2] bg-white'>
        <div className='container flex h-[80px] shrink-0 items-center justify-between px-2'>
          <div className='flex items-center justify-start'>
            <div className='flex items-center'>
              <Image priority src='/./logo.svg' width={80} height={20} alt='' />
              <NavLinks />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center space-x-1'>
              <ThemeSwitch />
              <WalletButton />
            </div>
          </div>
        </div>
      </div>
  );
};
