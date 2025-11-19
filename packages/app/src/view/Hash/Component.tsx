import { hash } from "@web/core";
import { useCallback, useMemo, useState } from "react";
import { TextAreaTool } from "../../component/input/TextAreaTool";
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

  const result = useMemo(() => {
    if (input.value === "") {
      return "";
    }

    const buffer = Buffer.from(input.value, input.inputEncoding);

    const output = hash("sha256", buffer);

    return output.toString(input.outputEncoding);
  }, [input]);

  return (
    <PageStandard title="Hash">
      <div className={styles.header}>Input</div>
      <div className={styles.row}>
        <SelectEncoding
          value={input.inputEncoding}
          onChange={handleInputEncoding}
        />
      </div>
      <TextAreaTool
        value={input.value}
        onChange={handleInputValue}
        placeholder="Enter value here"
      />
      <div className={styles.header}>Output</div>
      <div className={styles.row}>
        <SelectEncoding
          value={input.outputEncoding}
          onChange={handleOutputEncoding}
        />
      </div>
      <TextAreaTool
        value={result}
        onChange={handleInputValue}
        readOnly
      />
    </PageStandard>
  );
}
