import React from "react";
import styled from "styled-components/macro";

import {
  InputLabel,
  MenuItem,
  FormControl as MuiFormControl,
  Select as MuiSelect,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const FormControlSpacing = styled(MuiFormControl)(spacing);

const FormControl = styled(FormControlSpacing)`
  width: 100%;
`;

const Select = styled(MuiSelect)(spacing);

const SelectBox = ({ name, options = [], required = true }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl required={required} m={2}>
      <InputLabel id="demo-simple-select-required-label">{name}</InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option, key) => (
          <MenuItem
            key={key}
            value={
              option?.["@type"] === "Stub"
                ? option.property_value
                : option["@type"] === "State"
                ? option.name
                : option["@type"] === "City"
                ? option.name
                : option.value
            }
          >
            {option?.["@type"] === "Stub"
              ? option.property_value
              : option["@type"] === "State"
              ? option.name
              : option["@type"] === "City"
              ? option.name
              : option.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
