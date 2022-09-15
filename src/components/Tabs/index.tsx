import React from "react";
import MuiTabs from "@mui/material/Tabs";
import MuiTab, { TabProps as MuiTabProps } from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { Colors } from "../../styles/colors";
import Box, { BoxProps } from "@mui/material/Box";

function ariaProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface AnyProperties {
  [prop: string]: any
}

interface TabPanelProps extends BoxProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  style?: any;
}

function TabPanel({
  children,
  value,
  index,
  style,
  ...others
}: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={style}
    >
      {value === index && <Box {...others}>{children}</Box>}
    </div>
  );
}

const Tabs = styled(MuiTabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: Colors.PURPLE_BRIGHT,
    height: '2.5px',
    borderRadius: 20
  },
});

interface TabProps extends MuiTabProps {
  index: number;
}

const Tab = styled(({index, ...props}: TabProps) => (
  <MuiTab disableRipple {...props} {...ariaProps(index)}/>
))(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.7)"
      : "rgba(0, 0, 0, 0.7)",
  "&.Mui-selected": {
    color: theme.palette.mode === "dark" ? Colors.WHITE : Colors.BLACK,
  },
  "&.Mui-focusVisible": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(100, 95, 228, 0.32)"
        : "rgba(100, 95, 228, 0.32)",
  },
}));

export { Tabs, Tab, TabPanel }
