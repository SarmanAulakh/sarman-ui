import { useState } from "react";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { styled, useTheme } from "@mui/material/styles";
import { Colors } from "../..";
import React, { memo } from "react";

interface Props extends MenuItemProps {
  values: string[];
  placeholder: string;
  width?: number;
  height?: number;
  onChange?: any;
  select?: SelectProps;
  menuItem?: MenuItemProps;
}

const Dropdown = ({
  values,
  placeholder,
  width,
  height = 40,
  onChange,
  select,
  menuItem,
}: Props) => {
  const [value, setValue] = useState("");
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event.target.value !== "" ? event.target.value : null);
    }
  };

  const StyledSelect = styled(Select)(() => {
    const styles: any = {
      width,
      height,
      padding: "10px",
      borderRadius: "33px",
      textTransform: "none",
    };
    if (theme.palette.mode === "dark") {
      styles.background = Colors.PURPLE_DARK;
      styles.color = Colors.PURPLE_LIGHT_TEXT;
    }

    // styles["&:hover"] = {
    //   background: styles.background,
    // };

    return styles;
  });

  return (
    <StyledSelect
      value={value}
      onChange={handleChange as any}
      displayEmpty={true}
      renderValue={(val: any) => (val === "" ? placeholder : val)}
      { ...select }
    >
      <MenuItem value="" { ...menuItem } >
        <em>{placeholder}</em>
      </MenuItem>
      {values.map((val) => {
        return (
          <MenuItem key={val} value={val} { ...menuItem } >
            {val}
          </MenuItem>
        );
      })}
    </StyledSelect>
  );
}

export default memo(Dropdown);