import { useCallback, useMemo } from "react";
import { InputTool } from "../../../component/input/InputTool";
import { MessageError } from "../../../component/message/MessageError";
import { getBuffer, type Seed, type SeedType } from "./Seed";
import { SelectSeed } from "./SelectSeed";

import styles from "./RowSeed.module.scss";

export type RowSeedProps = {
  value: Seed;
  onChange: (value: Seed) => void;
};

export function RowSeed(props: RowSeedProps) {
  const { value, onChange } = props;

  const errorMessage = useMemo(() => {
    try {
      getBuffer(value);

      return null;
    } catch (err) {
      return (err instanceof Error) ? err.message : "Unknown error.";
    }
  }, [value]);

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
      <InputTool
        value={value.input}
        onChange={handleInput}
        placeholder="Enter value here"
      />
      <MessageError className={styles.message}>
        { errorMessage }
      </MessageError>
    </div>
  );
}
