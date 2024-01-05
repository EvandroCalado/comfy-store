import { FC } from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="border-b border-base-300 pb-5">
      <h2 className="text-3xl font-medium capitalize tracking-wider">
        {children}
      </h2>
    </div>
  );
};
