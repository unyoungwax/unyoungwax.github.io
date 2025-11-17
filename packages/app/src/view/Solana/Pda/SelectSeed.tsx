import { useMemo } from "react";
import { Select, type SelectOption } from "../../../component/input/Select";
import { type SeedType } from "./Seed";

export type SelectSeedProps = {
  value: SeedType;
  onChange: (value: SeedType) => void;
};

export function SelectSeed(props: SelectSeedProps) {
  const { value, onChange } = props;

  const options: SelectOption<SeedType>[] = useMemo(() => {
    return [{
      value: "PublicKey",
      label: "Public Key",
    }, {
      value: "String",
      label: "String (UTF-8)",
    }, {
      value: "u8",
      label: "u8",
    }];
  }, []);

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  );
}
