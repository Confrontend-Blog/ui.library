import { styled } from "@mui/system";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListItemText from "@mui/material/ListItemText";

export const Wrapper = styled("span")(({ theme }) => ({
  gridArea: "menu",
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  height: "100vh",
  minWidth: "12rem",
  maxWidth: "12rem",
  [theme.breakpoints.down("md")]: {
    minWidth: "3.5rem",
    maxWidth: "3.5rem",
    overflowX: "hidden",
  },
}));

export const LogoWrapper = styled("span")({
  flex: 0.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Logo = styled("img")(({ theme }) => ({
  width: "80%",
  paddingTop: "80%",
  backgroundImage: 'url("/logo.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  [theme.breakpoints.down("md")]: {
    backgroundImage: 'url("/logo-mini.png")',
  },
}));

export const MenuItemsWrapper = styled("span")({
  flex: 0.8,
  display: "flex",
  alignItems: "baseline",
  justifyContent: "left",
});

export const MenuFooter = styled("span")({
  flex: 0.2,
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
});

// export const LogoutIcon = styled(ExitToAppIcon)({
//   flex: 0.8,
//   color: ({ theme }: any) => theme.palette.primary.main,
// });

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
