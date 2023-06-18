import { cn } from 'lib/utils';
import React, { ReactElement } from 'react';

export type NoticeVariant = 'info' | 'error' | 'success' | 'warning';

interface NoticeProps {
  className?: string;
  title?: string | ReactElement;
  description: string | ReactElement;
  variant?: NoticeVariant;
}

const getNoticeIconName = (
  variant: NoticeVariant
): 'info' | 'notice' | 'checkInline' | 'attention' => {
  switch (variant) {
    case 'error':
      return 'notice';
    case 'success':
      return 'checkInline';
    case 'warning':
      return 'attention';
    default:
    case 'info':
      return 'info';
  }
};

export const Notice = ({
  className,
  title,
  description,
  variant = 'info',
}: NoticeProps) => {
  return (
    <div
      className={cn(
        'mt-6 rounded-lg border-[0.5px] border-lightGray1 px-4 py-3 text-sm leading-[18px] text-[#808991]',
        variant === 'warning' && 'text-error border-error'
      )}
    >
      {description}
    </div>
  );
};

export const NoticeInfo = (props: NoticeProps) => (
  <Notice variant='info' {...props} />
);
export const NoticeError = (props: NoticeProps) => (
  <Notice variant='error' {...props} />
);
export const NoticeWarning = (props: NoticeProps) => (
  <Notice variant='warning' {...props} />
);
export const NoticeSuccess = (props: NoticeProps) => (
  <Notice variant='success' {...props} />
);
