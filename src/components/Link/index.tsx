import clsx from "clsx";
import NextLink, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";
import { VARIANT_STYLES, Variant, TEXT_COLORS } from "../../styles/variants";

const STYLES = {
  ...VARIANT_STYLES,
  base: "btn-link",
};

interface ButtonProps extends LinkProps {
  children?: ReactNode;
  variant?: Variant;
  href: string;
  color?: keyof typeof TEXT_COLORS;
  className?: string;
  underline?: boolean;
}

const Link: FC<ButtonProps> = ({
  children,
  className,
  variant = "base",
  underline = false,
  color = "none",
  ...props
}) => (
  <NextLink
    className={clsx(
      STYLES[variant],
      color && TEXT_COLORS[color],
      underline ? "underline underline-offset-2" : "no-underline",
      className
    )}
    {...props}
  >
    {children}
  </NextLink>
);

export default Link;
