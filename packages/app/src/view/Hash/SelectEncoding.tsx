import { useMemo } from "react";
import { Select } from "../../component/input/Select";
import { Encoding } from "../../entity/Encode";

export type SelectEncodingProps = {
  value: BufferEncoding;
  onChange: (value: BufferEncoding) => void;
};

export function SelectEncoding(props: SelectEncodingProps) {
  const { value, onChange } = props;

  const options = useMemo(() => {
    return [{
      value: Encoding.Base64,
      label: "Base64",
    }, {
      value: Encoding.Hex,
      label: "Hex",
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
