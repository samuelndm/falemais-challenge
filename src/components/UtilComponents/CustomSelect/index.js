import React, { useEffect, useState, memo } from "react";
import Select from "react-select";
import { Container, Title } from "./styles";

const CustomSelect = ({ options, title, onChange }) => {
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
      <Title>{title || ""}</Title>
      <Select
        options={customOptions}
        placeholder='Selecione uma opção'
        isDisabled={!options.length}
        isClearable={true}
        onChange={(e) => onChange((e && e.value) || "")}
      />
    </Container>
  );
};

export default memo(CustomSelect);
