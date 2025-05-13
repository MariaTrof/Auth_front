import type { InputHTMLAttributes } from "react";

export enum InputTheme {
  BLANK = "blank",
  ACTIVE = "active",
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  theme: InputTheme;
  placeholder: string;
  type: string;
}
