'use client';

import React, { ReactElement, useState } from 'react';
import { cn } from 'utils/formatter';


export type TabContent = {
  title: string;
  content: ReactElement;
};

export interface TabsProps {
  tabsContent: TabContent[];
  componentTitle?: string;
  initialActiveTabIndex?: number;
  onTabChange?: (newIndex: number) => void;
  className?: string;
}

export const Tabs = ({
  tabsContent,
  initialActiveTabIndex = 0,
  onTabChange,
  className,
  componentTitle,
}: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(initialActiveTabIndex);

  const handleChange = (index: number) => {
    setActiveTabIndex(index);
    // Only call onTabChange callback if tab clicked isn't currently active
    if (index !== activeTabIndex && onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <>
      <div className='flex w-full flex-row items-center justify-center border-0 border-b-[0.5px] border-[#CFD9E2] px-[50px] pt-4'>
        {tabsContent.map(({ title }, index) => (
          <button
            key={index}
            className={cn(
              'relative duration-250 pb-4 mr-10 flex w-full flex-1 cursor-pointer items-center justify-center rounded-full opacity-100 transition ease-in-out text-xl',
              activeTabIndex === index
                ? 'font-bold text-black'
                : 'text-[#6C6C6C] font-normal'
            )}
            onClick={() => handleChange(index)}
          >
            {title}
            <span
              className={cn(
                'h-[3px] w-[79px] absolute bottom-0 bg-rv-gradient',
                activeTabIndex === index
                  ? 'visible opacity-100'
                  : 'invisible opacity-0'
              )}
            />
          </button>
        ))}
      </div>
      {tabsContent[activeTabIndex].content}
    </>
  );
};