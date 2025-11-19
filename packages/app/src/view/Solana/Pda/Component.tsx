import { PublicKey } from "@solana/web3.js";
import { useCallback, useMemo, useState } from "react";
import { InputTool } from "../../../component/input/InputTool";
import { PageStandard } from "../../../component/layout/PageStandard";
import { TextCopy } from "../../../component/layout/TextCopy";
import { ListArrange } from "./ListArrange";
import { RowSeed } from "./RowSeed";
import { getBuffer, type Seed } from "./Seed";

import styles from "./Component.module.scss";

export function Component() {
  const [programId, setProgramId] = useState("");
  const [seedInputs, setSeedInputs] = useState<Seed[]>([]);

  const pda = useMemo(() => {
    try {
      const seeds = seedInputs.map(getBuffer);

      const [publicKey, bump] = PublicKey.findProgramAddressSync(seeds, new PublicKey(programId));

      return {
        publicKey: publicKey.toString(),
        bump: bump.toString(),
      };
    } catch {
      return {
        publicKey: "",
        bump: "",
      };
    }
  }, [programId, seedInputs]);

  const handleAppend = useCallback(() => {
    setSeedInputs((state) => state.concat({
      type: "PublicKey",
      input: "",
    }));
  }, []);

  const render = useCallback((seed: Seed, index: number) => {
    const onChange = (seedNew: Seed) => {
      setSeedInputs((state) => {
        return state.toSpliced(index, 1, seedNew);
      });
    };

    return (
      <RowSeed value={seed} onChange={onChange} />
    );
  }, []);

  return (
    <PageStandard title="Program-Derived Address (PDA)">
      <div className={styles.header}>Program ID</div>
      <InputTool
        value={programId}
        onChange={setProgramId}
        placeholder="Enter value here"
      />
      <div className={styles.header}>Seeds</div>
      <ListArrange
        value={seedInputs}
        onChange={setSeedInputs}
        onAppend={handleAppend}
        render={render}
      />
      <div className={styles.header}>Result</div>
      <div className={styles.rows}>
        <div>PDA</div>
        <TextCopy>{ pda.publicKey }</TextCopy>
        <div>Bump</div>
        <TextCopy>{ pda.bump }</TextCopy>
      </div>
    </PageStandard>
  );
}
