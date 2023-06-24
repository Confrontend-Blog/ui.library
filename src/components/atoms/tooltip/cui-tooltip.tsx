import { Tooltip } from "@mui/material";
import { TooltipProps } from "@mui/material/Tooltip";
import React from "react";

export const CuiTooltip = ({ children, title }: TooltipProps) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};
