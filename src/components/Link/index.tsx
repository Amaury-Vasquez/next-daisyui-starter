import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";
import {
  VARIANT_STYLES,
  Variant,
  TEXT_COLORS,
  BUTTON_SIZES,
  ButtonSize,
} from "../../styles/variants";

const STYLES = {
  ...VARIANT_STYLES,
  base: "btn-link",
};

export interface ButtonProps extends LinkProps {
  children?: ReactNode;
  variant?: Variant;
  href: string;
  color?: keyof typeof TEXT_COLORS;
  className?: string;
  underline?: boolean;
  size?: ButtonSize;
}

const Link: FC<ButtonProps> = ({
  children,
  className,
  variant = "base",
  underline = false,
  color = "default",
  size,
  ...props
}) => (
  <NextLink
    className={clsx(
      STYLES[variant],
      color && TEXT_COLORS[color],
      underline ? "underline underline-offset-2" : "no-underline",
      size && BUTTON_SIZES[size],
      className
    )}
    {...props}
  >
    {children}
  </NextLink>
);

export default Link;
