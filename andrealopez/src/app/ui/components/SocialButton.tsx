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
          <a href={href} className={`inline-flex items-center justify-center p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:bg-gray-300 ${className}`}>
              <Icon />
          </a>
      );
};