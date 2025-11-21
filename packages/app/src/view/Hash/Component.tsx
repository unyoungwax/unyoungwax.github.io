import { hash, HashAlgorithm } from "@web/core";
import { useCallback, useMemo, useState } from "react";
import { TextAreaTool } from "../../component/input/TextAreaTool";
import { PageStandard } from "../../component/layout/PageStandard";
import { Encoding } from "../../entity/Encode";
import { SelectEncoding } from "./SelectEncoding";

import styles from "./Component.module.scss";
import { SelectHashAlgorithm } from "./SelectHashAlgorithm";

type State = {
  inputEncoding: BufferEncoding;
  outputEncoding: BufferEncoding;
  value: string;
  hashAlgorithm: string;
};

export function Component() {
  const [input, setInput] = useState<State>({
    inputEncoding: Encoding.Hex,
    outputEncoding: Encoding.Hex,
    value: "",
    hashAlgorithm: HashAlgorithm.md5,
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

  const handleHashAlgoritm = useCallback((hashAlgorithm: string) => {
    setInput((state) => ({ ...state, hashAlgorithm }));
  }, []);

  const result = useMemo(() => {
    const buffer = Buffer.from(input.value, input.inputEncoding);

    const output = hash(input.hashAlgorithm, buffer);

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
        <SelectHashAlgorithm
          value={input.hashAlgorithm}
          onChange={handleHashAlgoritm}
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
