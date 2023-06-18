'use client';

import { Button } from 'components/ui';
import { Modal } from 'components/ui/Modal';
import Image from 'next/image';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const options = [
  { icon: '', label: 'Ethereum', value: 1 },
  { icon: '', label: 'Goerli', value: 5 },
  { icon: '', label: 'Goerli', value: 56 },
];

export const NetworkStatus = () => {
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();
  const isWrongNetwork = chains.some((x) => {
    return !switchNetwork || x.id === chain?.id;
  });
  if (!chain) return null;
  return (
    <Modal isOpen={!isWrongNetwork} isBottomSheet>
      <div className='flex flex-col items-center justify-center px-6 py-10'>
        <Image
          className='flex'
          src='/./svgs/illustrations/wrong-network.svg'
          width={79}
          height={100}
          alt='wrong-network'
        />
        <span className='mt-4 text-2xl font-bold leading-[34px]'>
          Wrong network
        </span>
        <p className='mt-6 w-full max-w-[225px] text-center text-base font-normal leading-[24px] !text-[#626262]'>
          Please switch back to
          <br />
          <span className='mx-1'>{options[chain.id]?.label}</span>
          to continue
        </p>
        {chains.map((x) => (
          <Button
            isLoading={isLoading}
            variant='ghost'
            type='button'
            className='mt-8 h-[56px] rounded-full border border-gray-800/20 text-lg font-bold text-black focus:outline-none'
            disabled={
              !switchNetwork ||
              x.id === chain?.id ||
              (isLoading && pendingChainId === x.id)
            }
            key={x.id}
            onClick={() => switchNetwork?.(x.id)}
          >
            <span className='mx-2'>
              {isLoading && pendingChainId === x.id
                ? 'Switching'
                : `Switch to ${x.name}`}
            </span>
          </Button>
        ))}
        <div className='mt-2 text-error'>{error && error.message}</div>
      </div>
    </Modal>
  );
};