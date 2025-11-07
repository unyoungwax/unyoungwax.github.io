import { forwardRef, useCallback } from "react";

import styles from "./Input.module.scss";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = forwardRef(function Input(props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { onChange, className = "" } = props;

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  }, [onChange]);

  return (
    <input
      {...props}
      ref={ref}
      onChange={handleChange}
      className={`${styles.input} ${className}`}
    />
  );
});
