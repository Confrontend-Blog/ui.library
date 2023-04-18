import { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";
import * as S from "./cui-button.styled";
import React from "react";

type CuiButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * UI Button
 */
const CuiButton = ({
  children,
  onClick,
  color,
  bgColor,
  hoverColor,
  hoverBgColor,
  disabled,
  type = undefined,
  ...otherProps
}: CuiButtonProps) => {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      color={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
      disabled={disabled}
      type={type}
      {...otherProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export { CuiButton };
