import { useCallback, useMemo, useState } from "react";
import { DetailRow } from "../../component/layout/DetailRow";
import { TextAreaTool } from "../../component/layout/TextAreaTool";
import { type Base } from "../../entity/Base";

import styles from "./Row.module.scss";

export type InputState = {
  base: Base;
  value: bigint | undefined;
};

export type RowProps = {
  base: Base;
  inputState: InputState;
  setInputState: (value: InputState) => void;
};

export function Row(props: RowProps) {
  const { base, inputState, setInputState } = props;

  const [inputString, setInputString] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const value = useMemo(() => {
    if (inputState.base.radix === base.radix) {
      return inputString;
    }

    return (inputState.value == null) ? "" : base.fromBigInt(inputState.value);
  }, [base, inputState, inputString]);

  const handleChange = useCallback((valueNew: string) => {
    setInputString(valueNew);

    try {
      setInputState({
        base,
        value: base.toBigInt(valueNew),
      });

      setErrorMessage("");
    } catch (e) {
      setInputState({
        base,
        value: 0n,
      });

      setErrorMessage(e instanceof Error ? e.message : "Unknown error.");
    }
  }, [base, setInputState]);

  return (
    <DetailRow title={`Base ${base.radix}`}>
      <TextAreaTool
        name={`base${base.radix}`}
        value={value}
        onChange={handleChange}
        placeholder="Enter value here"
      />
      { (errorMessage !== "") && <div className={styles.error}>{ errorMessage }</div> }
    </DetailRow>
  );
}
