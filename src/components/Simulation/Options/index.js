import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Container } from "./styles";

const Options = ({ options, onChange }) => {
  const [customOptions, setCustomOptions] = useState([]);

  useEffect(() => {
    if (options && options.length) {
      setCustomOptions(
        options.map((option) => {
          return {
            value: option,
            label: option,
          };
        })
      );
    } else {
      setCustomOptions([]);
    }
  }, [options]);

  if (!options) return null;
  return (
    <Container>
      <Select
        options={customOptions}
        isDisabled={!options.length}
        onChange={(e) => onChange(e.value.toString())}
      />
    </Container>
  );
};

export default Options;
