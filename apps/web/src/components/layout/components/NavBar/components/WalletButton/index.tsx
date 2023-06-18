'use client';

import { WalletModal } from 'components/auth';
import { Button } from 'components/ui';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from 'components/ui';
import useConnection from 'hooks/auth/useConnection';
import Image from 'next/image';
import React, { useState } from 'react';
import { displayAddress } from 'utils/formatter';
import { clearLocalStorageAll } from 'utils/storage';
import { Address, useDisconnect, useEnsName } from 'wagmi';

export const WalletButton: React.FC = () => {
  const { isConnected, address, isConnecting } = useConnection();
  const { data: ensName } = useEnsName({ address: address as Address });
  const { disconnect } = useDisconnect();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const renderBtn = () => {
    if (isConnecting) {
      return (
        <div className='w-full'>
          <div className='flex animate-pulse space-x-4'>
            <div className='flex-1 space-y-6 py-1'>
              <div className='h-10 w-[160px] rounded-lg bg-[#e2e2e2]'></div>
            </div>
          </div>
        </div>
      );
    }
    return address && isConnected ? (
      <div className='flex cursor-pointer items-center justify-center space-x-2 text-lg font-bold leading-6 text-black transition'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='space-x-2 pr-0 text-lg font-bold focus:outline-none'
            >
              <span>
                {ensName
                  ? `${ensName} (${displayAddress(address)})`
                  : displayAddress(address)}
              </span>
              <Image
                className='mx-1 flex'
                src='/./svgs/common/chevronDown.svg'
                width={19}
                height={9}
                alt='chevron-down'
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuItem
              onClick={() => {
                disconnect();
                clearLocalStorageAll();
              }}
            >
              Disconnect
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    ) : (
      <>
        <Button
          onClick={(e) => {
            e.preventDefault();
            setIsWalletModalOpen(true);
          }}
        >
          Connect Wallet
          <svg
            viewBox='0 0 20 20'
            fill='none'
            aria-hidden='true'
            className='mr-1 h-5 w-5'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9'
            />
          </svg>
        </Button>
      </>
    );
  };

  return (
    <>
      {renderBtn()}
      <WalletModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
    </>
  );
};