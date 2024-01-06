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
      <select {...rest} className={twMerge('select select-primary', className)}>
        <option value="all">All</option>
        {list.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
