import { copyText } from "@web/core";
import { useCallback } from "react";
import { ButtonCopy } from "./ButtonCopy";

import styles from "./TextCopy.module.scss";

export type TextCopyProps = {
  className?: string;
  children?: string | number;
};

export function TextCopy(props: TextCopyProps) {
  const { className, children } = props;

  const handleCopy = useCallback(() => {
    return copyText(children?.toString());
  }, [children]);

  if (children == null || children === "") {
    return <div className={className} />;
  }

  return (
    <div className={className}>
      <span>{ children } </span>
      <ButtonCopy onClick={handleCopy} className={styles.button} />
    </div>
  );
}
