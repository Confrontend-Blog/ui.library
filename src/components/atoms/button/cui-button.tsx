import React, { MouseEvent, ReactNode } from "react";

import * as S from "./cui-button.styled";

export type CuiButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
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
  ...restProps
}: CuiButtonProps) => {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      textColor={color}
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverBgColor={hoverBgColor}
      disabled={disabled}
      type={type}
      {...restProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export { CuiButton };
