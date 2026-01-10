import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, asChild = false, children, disabled, ...props }, ref) => {

    const baseClass = cn(
      'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      {
        'bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900': variant === 'primary',
        'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-500': variant === 'secondary',
        'border border-zinc-200 bg-transparent hover:bg-zinc-50 text-zinc-900': variant === 'outline',
        'bg-transparent hover:bg-zinc-100 text-zinc-900': variant === 'ghost',
        'h-9 px-4 text-sm': size === 'sm',
        'h-11 px-6 text-base': size === 'md',
        'h-14 px-8 text-lg': size === 'lg',
      },
      className
    );

    if (asChild) {
      return (
        <Slot ref={ref} className={baseClass} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={baseClass}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
