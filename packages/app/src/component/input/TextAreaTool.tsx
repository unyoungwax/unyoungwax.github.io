import { copyText, TextArea } from "@web/core";
import { useCallback } from "react";
import { ButtonCopy } from "../layout/ButtonCopy";

import styles from "./TextAreaTool.module.scss";

export type TextAreaToolProps = {
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  rows?: number;
};

export function TextAreaTool(props: TextAreaToolProps) {
  const { value, onChange, name, disabled, readOnly, placeholder, rows = 1 } = props;

  const handleCopy = useCallback(() => {
    return copyText(value);
  }, [value]);

  return (
    <div className={styles.content}>
      <TextArea
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
        rows={rows}
        className={styles.textarea}
      />
      <div className={styles.bar}>
        <ButtonCopy onClick={handleCopy} />
      </div>
    </div>
  );
}
