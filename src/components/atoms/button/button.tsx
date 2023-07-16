import React, { MouseEvent, ReactNode } from "react";

import * as S from "./button.styled";

export type ButtonProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  color?: string;
  $bgColor?: string;
  $hoverColor?: string;
  $hoverBgColor?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};
/**
 * UI Button
 */
const Button = ({
  children,
  onClick,
  color,
  $bgColor,
  $hoverColor,
  $hoverBgColor,
  disabled,
  type = undefined,
  ...restProps
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      $textColor={color}
      $bgColor={$bgColor}
      $hoverColor={$hoverColor}
      $hoverBgColor={$hoverBgColor}
      disabled={disabled}
      type={type}
      {...restProps}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export { Button };
