import { Button, Popover } from "@web/core";
import classNames from "classnames";
import { useCallback, useMemo, useRef, useState } from "react";

import styles from "./Select.module.scss";

export type SelectOption<T> = {
  value: T;
  label: string;
};

export type SelectProps<T> = {
  value?: T;
  onChange?: (value: T) => void;
  options?: SelectOption<T>[];
  className?: string;
};

export function Select<T>(props: SelectProps<T>) {
  const { value, onChange, options = [], className } = props;

  const ref = useRef<HTMLButtonElement>(null);

  const [visible, setVisible] = useState(false);

  const optionSelected = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [value, options]);

  const handleToggle = useCallback(() => {
    setVisible((state) => !state);
  }, [setVisible]);

  return (
    <>
      <Button
        ref={ref}
        onClick={handleToggle}
        className={classNames(styles.button, className)}
      >
        { optionSelected?.label }
      </Button>
      <Popover
        visible={visible}
        onVisibleChange={setVisible}
        anchorEl={ref.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <div className={styles.options}>
          {
            options.map((option, index) => {
              const onClick = () => {
                onChange?.(option.value);

                setVisible(false);
              };

              return (
                <Button
                  key={index}
                  onClick={onClick}
                  className={styles.option}
                >
                  { option.label }
                </Button>
              );
            })
          }
        </div>
      </Popover>
    </>
  );
}
