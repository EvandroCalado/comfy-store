import { FC, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  shipping?: string;
  className?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  shipping,
  className,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(shipping === 'on' ? true : false);

  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
        className={twMerge('checkbox-primary checkbox', className)}
        {...rest}
      />
    </div>
  );
};
