export const primary = "btn btn-primary";
export const secondary = "btn btn-secondary";
export const accent = "btn btn-accent";
export const neutral = "btn btn-neutral";
export const info = "btn btn-info";
export const success = "btn btn-success";
export const warning = "btn btn-warning";
export const error = "btn btn-error";
export const ghost = "btn btn-ghost";
export const base = "";

export const VARIANT_STYLES = {
  base,
  primary,
  secondary,
  accent,
  neutral,
  info,
  success,
  warning,
  error,
  ghost,
};

export type Variant = keyof typeof VARIANT_STYLES;

export const BUTTON_SIZES = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export type ButtonSize = keyof typeof BUTTON_SIZES;

export const TEXT_COLORS = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
  neutral: "text-neutral",
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  base: "text-base-content",
  default: "",
};
