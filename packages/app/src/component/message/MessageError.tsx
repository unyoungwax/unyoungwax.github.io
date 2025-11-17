import classNames from "classnames";

import styles from "./MessageError.module.scss";

export type MessageErrorProps = {
  className?: string;
  children?: React.ReactNode;
};

export function MessageError(props: MessageErrorProps) {
  const { className, children } = props;

  if (children == null) {
    return null;
  }

  return (
    <div className={classNames(styles.message, className)}>
      { children }
    </div>
  );
}
