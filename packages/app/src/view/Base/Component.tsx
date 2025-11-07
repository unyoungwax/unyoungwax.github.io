import { useState } from "react";
import { PageStandard } from "../../component/layout/PageStandard";
import { Base2, Base10, Base16 } from "../../entity/Base";
import { type InputState, Row } from "./Row";

import styles from "./Component.module.scss";

export function Component() {
  const [inputState, setInputState] = useState<InputState>({
    base: Base2,
    value: undefined,
  });

  return (
    <PageStandard title="Base">
      <div className={styles.content}>
        {
          [Base2, Base10, Base16].map((base) => (
            <Row
              key={base.radix}
              base={base}
              inputState={inputState}
              setInputState={setInputState}
            />
          ))
        }
      </div>
    </PageStandard>
  );
}
