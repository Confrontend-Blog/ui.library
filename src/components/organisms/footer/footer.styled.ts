import { styled } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const FooterWrapper = styled("footer")(
  ({ theme }: { theme?: Theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
    fontSize: theme!.typography.caption.fontSize,
    borderTop: `1px solid ${theme!.palette.divider}`,
  })
);

export const FooterNav = styled("nav")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
