export const primary = "btn-primary";
export const secondary = "btn-secondary";
export const accent = "btn-accent";
export const neutral = "btn-neutral";
export const info = "btn-info";
export const success = "btn-success";
export const warning = "btn-warning";
export const error = "btn-error";
export const base = "btn";

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
};

export type Variant = keyof typeof VARIANT_STYLES;
