import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ClearIcon from "@mui/icons-material/Clear";
import { Button } from "@web/core";
import classNames from "classnames";

import styles from "./ListArrange.module.scss";

export type ListArrangeProps<T> = {
  value?: T[];
  onChange?: (value: T[]) => void;
  onAppend?: () => void;
  render?: (value: T, index: number) => React.ReactNode;
  className?: string;
};

export function ListArrange<T>(props: ListArrangeProps<T>) {
  const { value = [], onChange, onAppend, render, className } = props;

  return (
    <div className={classNames(styles.items, className)}>
      {
        value.map((item, index) => {
          const handleUp = () => {
            if (index > 0) {
              onChange?.(value.toSpliced(index - 1, 2, value[index] as T, value[index - 1] as T));
            }
          };

          const handleDown = () => {
            if (index < value.length - 1) {
              onChange?.(value.toSpliced(index, 2, value[index + 1] as T, value[index] as T));
            }
          };

          const handleDelete = () => {
            onChange?.(value.toSpliced(index, 1));
          };

          return (
            <div key={index} className={styles.item}>
              { render?.(item, index) }
              <Button onClick={handleUp}>
                <ArrowUpwardIcon className={styles.icon} />
              </Button>
              <Button onClick={handleDown}>
                <ArrowDownwardIcon className={styles.icon} />
              </Button>
              <Button onClick={handleDelete}>
                <ClearIcon className={styles.icon} />
              </Button>
            </div>
          );
        })
      }
      <Button onClick={onAppend} className={styles.append}>
        <AddIcon className={styles.add} />
      </Button>
    </div>
  );
}
