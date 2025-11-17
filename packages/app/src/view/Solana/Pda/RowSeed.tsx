import { Input } from "@web/core";
import { useCallback } from "react";
import { type Seed, type SeedType } from "./Seed";
import { SelectSeed } from "./SelectSeed";

import styles from "./RowSeed.module.scss";

export type RowSeedProps = {
  value: Seed;
  onChange: (value: Seed) => void;
};

export function RowSeed(props: RowSeedProps) {
  const { value, onChange } = props;

  const handleType = useCallback((type: SeedType) => {
    onChange({
      type,
      input: value.input,
    });
  }, [onChange, value.input]);

  const handleInput = useCallback((input: string) => {
    onChange({
      type: value.type,
      input,
    });
  }, [onChange, value.type]);

  return (
    <div className={styles.row}>
      <SelectSeed
        value={value.type}
        onChange={handleType}
      />
      <Input
        value={value.input}
        onChange={handleInput}
        placeholder="Enter value here"
        className={styles.input}
      />
    </div>
  );
}
