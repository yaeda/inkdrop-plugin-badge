import { makeBadge } from "badge-maker";

const STYLE_CANDIDATES = [
  "plastic",
  "flat",
  "flat-square",
  "for-the-badge",
  "social",
] as const;

type StyleType = typeof STYLE_CANDIDATES[number];

const isValidStyle = (style: string): style is StyleType => {
  return STYLE_CANDIDATES.includes(style as any);
};

type Option = {
  label: string;
  message: string;
  style?: string;
};

export const getBadge = (option: Option) => {
  const style = isValidStyle(option.style) ? option.style : "plastic";

  return makeBadge({
    label: option.label,
    message: option.message,
    color: "rgb(124, 117, 223)",
    style: style,
  });
};
