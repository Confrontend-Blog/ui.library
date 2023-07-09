import { Button, ButtonProps } from "@mui/material";
import { styled } from "../../../utils/styled";

type CustomButtonProps = {
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
} & ButtonProps;

export const ButtonWrapper = styled(Button)<CustomButtonProps>(
  ({ theme, textColor, bgColor, hoverBgColor, hoverColor }) => ({
    borderRadius: "0.75em",
    display: "inline-block",
    cursor: "pointer",
    color: textColor || theme.palette.background.paper,
    backgroundColor: bgColor || theme.palette?.info?.main,
    fontSize: "15px",
    fontWeight: "bold",
    padding: "6px 24px",
    textDecoration: "none",
    "&:hover": {
      boxShadow: theme.shadows![2],
      backgroundColor: hoverBgColor || theme.palette?.secondary?.main,
      color: hoverColor || theme.palette.background.paper,
    },
    "&:disabled": {
      color: textColor || theme.palette.background.paper,
      cursor: "not-allowed",
      backgroundColor: bgColor || theme.palette?.action?.disabled,
      pointerEvents: "none",
    },
  })
);
