'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import toast, { Toast as ToastType } from 'react-hot-toast';

type Props = {
  toastProps: ToastType;
  title: string;
  description: string;
  transactionHash?: string;
  type?: 'success' | 'error';
};
export const Toast = (props: Props) => {
  const { toastProps: t, title, description, transactionHash } = props;

  const type = props.type || 'success';

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return (
          <Image
            src='/svgs/common/check-green.svg'
            width={40}
            height={40}
            alt='check-green'
          />
        );
      case 'error':
        return (
          <Image
            src='/svgs/common/error-red.svg'
            width={40}
            height={40}
            alt='error'
          />
        );
      default:
        return null;
    }
  };
  return (
    <AnimatePresence>
      {t.visible && (
        <motion.div
          layout
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5 }}
          className='pointer-events-auto flex w-full max-w-[600px] rounded-box bg-white shadow-lg ring-1 ring-[#CFD9E2]'
        >
          <div className='w-0 flex-1 p-6'>
            <div className='flex items-start'>
              <div className='shrink-0 pt-0.5'>{renderIcon()}</div>
              <div className='ml-4 flex-1'>
                <p className='text-lg font-bold leading-6 text-black'>
                  {title}
                </p>
                <p className='mt-2 text-base leading-6 !text-[#626262]'>
                  {transactionHash ? (
                    <>
                      You can view your transaction on
                      <Link
                        className='ml-1 underline'
                        href={`${transactionHash}`}
                      >
                        here
                      </Link>
                    </>
                  ) : (
                    description
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className='flex border-gray-200 p-6'>
            <button
              onClick={() => toast.dismiss(t.id)}
              className='flex w-full items-start justify-center rounded-none rounded-r-lg border border-transparent'
            >
              <Image
                src='/svgs/common/close.svg'
                width={24}
                height={24}
                alt='close'
              />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
