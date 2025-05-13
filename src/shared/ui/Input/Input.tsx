import { useState, useEffect, type FC, type ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { InputTheme, type InputProps } from "./Input.const";
import classNames from "classnames";

export const Input: FC<InputProps> = ({
  className,
  theme = InputTheme.BLANK,
  placeholder,
  type,
  value: propValue = "",
  ...props
}) => {
  const [value, setValue] = useState(propValue);
  const [hasText, setHasText] = useState(false);

  useEffect(() => {
    setHasText(value.toString().length > 0);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const currentTheme = hasText ? InputTheme.ACTIVE : theme;

  return (
    <input
      className={classNames(styles.input, styles[currentTheme], className)}
      {...props}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
