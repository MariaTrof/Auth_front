import styles from "./Button.module.scss";
import type { BtnProps } from "./Button.const";
import classNames from "classnames";


export const Button = ({ children, onClick, className, theme, ...props }: BtnProps) => {
    return (
        <button
            className={classNames(styles.btn, styles[theme], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    )
}