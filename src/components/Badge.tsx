import { classNames } from '../utils/helpers';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-background-secondary text-text-secondary',
    primary: 'bg-primary/20 text-primary border border-primary/30',
    secondary: 'bg-background-secondary text-text border border-border',
  };

  return (
    <span
      className={classNames(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

