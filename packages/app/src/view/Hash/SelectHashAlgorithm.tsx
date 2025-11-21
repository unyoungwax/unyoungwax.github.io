import { HashAlgorithm } from "@web/core";
import { useMemo } from "react";
import { Select } from "../../component/input/Select";

export type SelectHashAlgorithmProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SelectHashAlgorithm(props: SelectHashAlgorithmProps) {
  const { value, onChange } = props;

  const options = useMemo(() => {
    return [{
      value: HashAlgorithm.md5,
      label: HashAlgorithm.md5,
    }, {
      value: HashAlgorithm.sha256,
      label: HashAlgorithm.sha256,
    }, {
      value: HashAlgorithm.sha512,
      label: HashAlgorithm.sha512,
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
