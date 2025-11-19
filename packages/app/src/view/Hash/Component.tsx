import { sha256 } from "@web/core";
import { useCallback, useMemo, useState } from "react";
import { InputTool } from "../../component/input/InputTool";
import { PageStandard } from "../../component/layout/PageStandard";
import { Encoding } from "../../entity/Encode";
import { SelectEncoding } from "./SelectEncoding";

import styles from "./Component.module.scss";

type State = {
  inputEncoding: BufferEncoding;
  outputEncoding: BufferEncoding;
  value: string;
};

export function Component() {
  const [input, setInput] = useState<State>({
    inputEncoding: Encoding.Hex,
    outputEncoding: Encoding.Hex,
    value: "",
  });

  const handleInputEncoding = useCallback((inputEncoding: BufferEncoding) => {
    setInput((state) => ({ ...state, inputEncoding }));
  }, []);

  const handleOutputEncoding = useCallback((outputEncoding: BufferEncoding) => {
    setInput((state) => ({ ...state, outputEncoding }));
  }, []);

  const handleInputValue = useCallback((value: string) => {
    setInput((state) => ({ ...state, value }));
  }, []);

  const hash = useMemo(() => {
    if (input.value === "") {
      return "";
    }

    const buffer = Buffer.from(input.value, input.inputEncoding);

    const result = sha256(buffer);

    return result.toString(input.outputEncoding);
  }, [input]);

  return (
    <PageStandard title="Hash">
      <div className={styles.header}>Input</div>
      <div className={styles.row}>
        <SelectEncoding
          value={input.inputEncoding}
          onChange={handleInputEncoding}
        />
        <InputTool
          value={input.value}
          onChange={handleInputValue}
          placeholder="Enter value here"
        />
      </div>
      <div className={styles.header}>SHA-256</div>
      <div className={styles.row}>
        <SelectEncoding
          value={input.outputEncoding}
          onChange={handleOutputEncoding}
        />
        <InputTool
          value={hash}
          onChange={handleInputValue}
          readOnly
        />
      </div>
    </PageStandard>
  );
}
