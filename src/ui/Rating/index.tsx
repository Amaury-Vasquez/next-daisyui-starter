import clsx from "clsx";
import { FC, useState } from "react";

export const RATING_SIZES = {
  xs: "rating-xs",
  sm: "rating-sm",
  md: "rating-md",
  lg: "rating-lg",
};

export const MASKS = {
  heart: "mask-heart",
  star: "mask-star-2",
};

export interface RatingProps {
  name: string;
  size?: keyof typeof RATING_SIZES;
  onChange: (value: number) => void;
  className?: string;
  containerClassName?: string;
  mask?: "heart" | "star";
}

const Rating: FC<RatingProps> = ({
  size = "md",
  name,
  onChange,
  mask = "star",
  className,
  containerClassName,
}) => {
  const [value, setValue] = useState<number>(0);

  return (
    <form
      className={clsx(
        "rating rating-half",
        RATING_SIZES[size],
        containerClassName
      )}
      onChange={() => onChange(value)}
    >
      <input
        type="radio"
        name={name}
        className="rating-hidden"
        value={0}
        checked={value === 0}
        onChange={() => setValue(0)}
      />
      {Array.from({ length: 10 }, (_, i) => i).map((i) => (
        <input
          className={clsx(
            "mask",
            MASKS[mask],
            i % 2 === 0 ? "mask-half-1" : "mask-half-2",
            className
          )}
          type="radio"
          name={name}
          key={`rating-${name}-${i}`}
          onChange={() => setValue(i)}
          checked={value === i}
        />
      ))}
    </form>
  );
};

export default Rating;
