import { LucideIcon } from 'lucide-react';

interface SocialButtonProps {
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const SocialButton = ({
  icon: Icon,
  href,
  className,
}: SocialButtonProps) => {
    return (
          <a href={href} className={`inline-flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 duration-300 dark:bg-slate-800 dark:hover:bg-slate-700 ${className}`}>
              <Icon />
          </a>
      );
};