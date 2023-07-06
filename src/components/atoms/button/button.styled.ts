import { Theme } from "@mui/material/styles";

import { Button, ButtonProps } from "@mui/material";
import { styled } from "../../../utils/styled";

type CustomButtonProps = {
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
} & ButtonProps;

const shouldForwardProp = (prop: any) =>
  !["textColor", "bgColor", "hoverBgColor", "hoverColor"].includes(prop);

export const ButtonWrapper = styled(Button, {
  shouldForwardProp,
})<CustomButtonProps>`
  box-shadow: ${({ theme }) => theme.shadows![2]};
  border: 1px solid;
  border-radius: 0.75em;
  display: inline-block;
  cursor: pointer;
  color: ${({ textColor }) => textColor || "#000"};
  background-color: ${({ bgColor }) => bgColor || "#000"};
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || "#eee"};
    color: ${({ hoverColor }) => hoverColor || "#000"};
  }
  &:disabled {
    color: rgba(151, 151, 151, 1);
    cursor: not-allowed;
    box-shadow: none;
    background-color: #222;
    pointer-events: none;
  }
`;
