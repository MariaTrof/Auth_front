import type { FC } from "react";
import styles from "./Button.module.scss";
import type { BtnProps } from "./Button.const";
import classNames from "classnames";


export const Button: FC<BtnProps> = ({ label, onClick, className, theme, ...props }) => {
    return (
        <button
            className={classNames(styles.btn, styles[theme], className)}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}