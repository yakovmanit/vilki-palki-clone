import React from 'react';
import { cn } from '@shared/lib';
import { Logo } from '@shared/ui/icons';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('bg-[#000c26] py-4', className)}>
			header
     </header>
  );
};
