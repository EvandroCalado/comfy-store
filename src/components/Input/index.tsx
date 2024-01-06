import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({ label, className, ...rest }) => {
  return (
    <label className="form-control">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <input
        className={twMerge('input input-bordered input-primary', className)}
        {...rest}
      />
    </label>
  );
};
