import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button } from "@web/core";
import classNames from "classnames";

import styles from "./ButtonCopy.module.scss";

export type ButtonCopyProps = {
  onClick?: () => void;
  className?: string;
};

export function ButtonCopy(props: ButtonCopyProps) {
  const { onClick, className } = props;

  return (
    <Button onClick={onClick} className={classNames(styles.button, className)}>
      <ContentCopyIcon fontSize="inherit" className={styles.icon} />
    </Button>
  );
}
