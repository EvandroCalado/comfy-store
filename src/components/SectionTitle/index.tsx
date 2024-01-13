import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  children,
  className,
}) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2
        className={twMerge(
          'text-3xl font-medium capitalize tracking-wider',
          className,
        )}
      >
        {children}
      </h2>
    </div>
  );
};
