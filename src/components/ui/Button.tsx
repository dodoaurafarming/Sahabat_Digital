import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: string;
}

export default function Button({ 
  className, 
  variant = 'primary', 
  children, 
  icon, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full h-14 flex items-center justify-center gap-2 rounded-full font-bold text-[17px] transition-all duration-150",
        "active:translate-y-1 active:shadow-none",
        variant === 'primary' && "bg-primary text-white shadow-[0_4px_0_#004395] hover:bg-blue-700",
        variant === 'secondary' && "bg-white text-primary border-2 border-surface-container shadow-[0_4px_0_#e6eefb] hover:bg-surface-container-low",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="material-symbols-outlined text-[22px]">{icon}</span>}
    </button>
  );
}