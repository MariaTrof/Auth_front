import type { ButtonHTMLAttributes } from "react";

export enum ButtonTheme {
    FORM = "form",
    PAGE = "page"
}
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
    theme: ButtonTheme;
}