import { ButtonHTMLAttributes, FC } from 'react';
import { useNavigation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      className={twMerge('btn btn-primary btn-block', className)}
      disabled={isSubmitting}
      {...rest}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>
          sending...
        </>
      ) : (
        children
      )}
    </button>
  );
};
