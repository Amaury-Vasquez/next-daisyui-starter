import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import {
  VARIANT_STYLES,
  Variant,
  ButtonSize,
  BUTTON_SIZES,
} from "../../styles/variants";
import { ButtonType } from "@/types/button";

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  className?: string;
  children?: ReactNode;
  variant?: Variant;
  type?: ButtonType;
  size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "base",
  type = "button",
  className,
  size = "md",
  ...props
}) => (
  <button
    className={clsx(
      "btn",
      className,
      variant !== "base" && VARIANT_STYLES[variant],
      BUTTON_SIZES[size]
    )}
    {...props}
    type={type}
  >
    {children}
  </button>
);

export default Button;
