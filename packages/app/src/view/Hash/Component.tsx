import { useCallback, useState } from "react";
import { PageStandard } from "../../component/layout/PageStandard";
import { Encoding } from "../../entity/Encode";
import { SelectEncoding } from "./SelectEncoding";

import styles from "./Component.module.scss";

export function Component() {
  const [input, setInput] = useState({
    encoding: Encoding.Hex,
    value: "",
  });

  const handleEncoding = useCallback((encoding: string) => {
    setInput((state) => ({ ...state, encoding }));
  }, []);

  return (
    <PageStandard title="Hash">
      <div className={styles.header}>Input</div>
      <div className={styles.row}>
        <SelectEncoding
          value={input.encoding}
          onChange={handleEncoding}
        />
      </div>
    </PageStandard>
  );
}
