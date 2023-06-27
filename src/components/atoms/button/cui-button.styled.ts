import { Theme } from '@mui/material/styles';
import { styled } from "@mui/system";

import { Button, ButtonProps } from "@mui/material";

type CustomButtonProps = {
  textColor?: string;
  bgColor?: string;
  hoverBgColor?: string;
  hoverColor?: string;
  theme?: Theme // TODO find a way to make this implicit
} & ButtonProps;

export const ButtonWrapper = styled(Button)<CustomButtonProps>(
  ({ theme, textColor, bgColor, hoverBgColor, hoverColor }) => ({
    boxShadow: theme.shadows[1],
    border: '1px solid',
    borderRadius: '0.75em',
    display: 'inline-block',
    cursor: 'pointer',
    color: textColor || '#000',
    backgroundColor: bgColor,
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '6px 24px',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: hoverBgColor || '#eee',
      color: hoverColor || '#000',
    },
    '&:disabled': {
      color: 'rgba(151, 151, 151, 1)',
      cursor: 'not-allowed',
      boxShadow: 'none',
      backgroundColor: '#222',
      pointerEvents: 'none',
    },
  })
);
