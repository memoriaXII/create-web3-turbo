'use client';

import { AnimatePresence, motion } from 'framer-motion';
import useOnClickOutside from 'hooks/common/useOnClickOutside';
import { cn } from 'lib/utils';
import Image from 'next/image';
import React, { ReactElement, useRef } from 'react';


export interface ModalProps {
  className?: string;
  isOpen: boolean;
  handleClose?: () => void;
  handleBackAction?: () => void;
  title?: string | ReactElement | ReactElement[];
  hasCloseIcon?: boolean;
  isBottomSheet?: boolean;
  hasFocusClose?: boolean;
  children: ReactElement | ReactElement[];
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  handleClose,
  isOpen,
  title,
  hasCloseIcon = false,
  isBottomSheet = false,
  hasFocusClose = true,
  maxWidth,
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (hasFocusClose) handleClose?.();
  });
  return (
    <AnimatePresence>
      {isOpen && (
        <div className='fixed left-0 top-0 z-[20] flex h-full w-full items-center justify-center'>
          <div className='absolute h-full w-full bg-black/20 backdrop-blur-sm'></div>
          <motion.div
            ref={ref}
            className={cn(
              'z-50 mx-auto w-11/12 overflow-y-auto rounded-md bg-white shadow-lg max-w-md relative',
              maxWidth,
              isBottomSheet &&
                'absolute inset-x-0 bottom-0 flex w-full min-w-full list-none flex-col rounded-b-none rounded-t-[20px] bg-white px-2 py-7 dark:bg-black4 mobile:mx-0'
            )}
            initial={{ opacity: 1, y: 250 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'tween',
                ease: 'easeOut',
                duration: 0.2,
              },
            }}
            exit={{
              opacity: 0.8,
              y: 250,
              transition: {
                type: 'tween',
                ease: 'easeIn',
                duration: 0.2,
              },
            }}
          >
            {hasCloseIcon && (
              <Image
                onClick={handleClose}
                src='/./svgs/common/close.svg'
                className='absolute right-5 top-5 cursor-pointer'
                width={20}
                height={20}
                alt=''
              />
            )}

            <div className='flex flex-col items-center justify-center px-6 py-10'>
              <div className='flex w-full items-center justify-center'>
                {title}
              </div>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};