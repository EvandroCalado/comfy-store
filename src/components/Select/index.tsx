import { FC, SelectHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  list: string[];
  label?: string;
  name?: string;
  className?: string;
}

export const Select: FC<SelectProps> = ({
  list,
  label,
  name,
  className,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        {...rest}
        name={name}
        id={name}
        className={twMerge('select select-primary capitalize', className)}
      >
        <option value={''}></option>
        {list.map((item) => (
          <option key={item} value={item} className="capitalize">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
