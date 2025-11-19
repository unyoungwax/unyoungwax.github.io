import { Input } from "@web/core";
import classNames from "classnames";
import { useCallback } from "react";
import { ButtonCopy } from "../layout/ButtonCopy";

import styles from "./InputTool.module.scss";

export type InputToolProps = {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
};

export function InputTool(props: InputToolProps) {
  const { value, onChange, disabled, readOnly, placeholder, className } = props;

  const handleCopy = useCallback(() => {
    onChange?.(value ?? "");
  }, [onChange, value]);

  return (
    <div className={classNames(styles.content, className)}>
      <Input
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={placeholder}
      />
      <ButtonCopy onClick={handleCopy} />
    </div>
  );
}
