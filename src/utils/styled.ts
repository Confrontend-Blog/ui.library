import { styled as muiStyled, CreateMUIStyled } from "@mui/material/styles";
import { AppTheme } from "../theme/theme";

/** Forward only props starting with $ to the dom */
const shouldForwardProp = (prop: string | number | symbol) =>
  typeof prop === "string" ? !prop.startsWith("$") : true;

export const styled: CreateMUIStyled<AppTheme> = (
  component: any,
  options: any
) =>
  muiStyled(component, {
    shouldForwardProp,
    ...options,
  }) as ReturnType<CreateMUIStyled<AppTheme>>;
