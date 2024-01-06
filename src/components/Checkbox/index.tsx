import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  defaultValue?: string;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  defaultValue,
  className,
  ...rest
}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultValue={defaultValue}
        className={twMerge('checkbox-primary checkbox', className)}
        {...rest}
      />
    </div>
  );
};
