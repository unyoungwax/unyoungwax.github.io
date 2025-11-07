import { forwardRef } from "react";

import styles from "./Button.module.scss";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(function Button(props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { className = "" } = props;

  return (
    <button
      {...props}
      ref={ref}
      className={`${styles.button} ${className}`}
    />
  );
});
