import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import { VARIANT_STYLES, Variant } from "../../styles/variants";
import { ButtonType } from "@/types/button";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: Variant;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "base",
  type = "button",
  className,
  ...props
}) => (
  <button
    className={clsx(
      "btn",
      className,
      variant !== "base" && VARIANT_STYLES[variant]
    )}
    {...props}
    type={type}
  >
    {children}
  </button>
);

export default Button;
