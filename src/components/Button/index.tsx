import clsx from "clsx";
import { FC, HTMLProps, ReactNode } from "react";
import { VARIANT_STYLES, Variant } from "../../styles/variants";
import { ButtonType } from "@/types/button";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  type?: ButtonType;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "base",
  type = "button",
  ...props
}) => (
  <button
    className={clsx("btn", variant !== "base" && VARIANT_STYLES[variant])}
    {...props}
    type={type}
  >
    {children}
  </button>
);

export default Button;
