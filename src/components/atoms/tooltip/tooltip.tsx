import { Tooltip as MuiTooltip } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip";
import React from "react";

export const Tooltip = ({ children, title }: TooltipProps) => {
  return <MuiTooltip title={title}>{children}</MuiTooltip>;
};
