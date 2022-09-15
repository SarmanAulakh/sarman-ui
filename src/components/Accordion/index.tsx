import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { RiArrowDownSLine } from "react-icons/ri";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Colors } from "../..";

const Accordion = (props: AccordionProps) => {
  const styles = {
    backgroundColor: "transparent",
    border: `none`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  };
  return <MuiAccordion disableGutters elevation={0} sx={styles} {...props} />;
};

const AccordionSummary = (props: AccordionSummaryProps) => {
  const theme = useTheme();
  const color = theme.palette.mode === "dark" ? Colors.WHITE : Colors.BLACK;
  const styles = {
    backgroundColor: "transparent",
    borderBottom:
      theme.palette.mode === "dark"
        ? `1px solid ${Colors.WHITE}`
        : `1px solid ${Colors.PURPLE_BRIGHT}`,
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  };
  return (
    <MuiAccordionSummary
      sx={styles}
      expandIcon={<RiArrowDownSLine size={24} color={color} />}
      {...props}
    />
  );
};

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export { Accordion, AccordionSummary, AccordionDetails };
