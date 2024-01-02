import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button className="btn btn-primary" {...rest}>
      {children}
    </button>
  );
};
