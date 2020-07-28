import { makeBadge } from "badge-maker";

const STYLE_CANDIDATES = [
  "plastic",
  "flat",
  "flat-square",
  "for-the-badge",
  "social",
];

type Option = {
  label: string;
  message: string;
  style?: string;
};

export const getBadge = (option: Option) => {
  const style = STYLE_CANDIDATES.includes(option.style)
    ? option.style
    : "plastic";

  return makeBadge({
    label: option.label,
    message: option.message,
    color: "rgb(124, 117, 223)",
    style: style,
  });
};
