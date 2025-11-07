import { forwardRef, useCallback } from "react";

import styles from "./TextArea.module.scss";

export type TextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> & {
  onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const TextArea = forwardRef(function TextArea(props: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) {
  const { onChange, className = "" } = props;

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value, event);
  }, [onChange]);

  return (
    <textarea
      {...props}
      ref={ref}
      onChange={handleChange}
      className={`${styles.textarea} ${className}`}
    />
  );
});
