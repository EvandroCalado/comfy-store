import { FC, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  price?: number;
  className?: string;
}

export const Range: FC<RangeProps> = ({
  label,
  name,
  price,
  className,
  ...rest
}) => {
  const maxPrice = 1000;

  const [selectedPrice, setSelectedPrice] = useState(price ?? maxPrice);

  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>R${selectedPrice}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice.toFixed(2)}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
        step="1"
        className={twMerge('range range-primary', className)}
        {...rest}
      />
      <div className="mt-2 flex w-full justify-between px-2 text-sm">
        <span className="font-bold">0</span>
        <span className="font-bold">Max: R${maxPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};
