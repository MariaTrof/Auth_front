import type { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
    FORM = "form",
    PAGE = "page"
}
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme: ButtonTheme;
}