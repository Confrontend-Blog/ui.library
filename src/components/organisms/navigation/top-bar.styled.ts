import { Link, Theme } from "@mui/material";
import { styled } from "@mui/material/styles";

type NavigationWrapperProps = {
  linkStyle?: string;
  theme: Theme;
};

export const NavigationWrapper = styled("span")<NavigationWrapperProps>(
  ({ theme, linkStyle }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: `0 ${theme.spacing(4)}px`,
    height: theme.spacing(10),
    a: {
      textDecoration: "none",
      color: "unset",
    },
  })
);

export const ItemRightWrapper = styled("span")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "2em 2em 10em",
  alignItems: "center",
  justifyContent: "right",
  marginLeft: "auto",
  gap: "1em",
  color: theme.palette.background.default,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  "&:link": {
    color: theme.palette.action.active,
    textDecoration: "none",
  },
  "&:visited": {
    color: theme.palette.action.active,
    textDecoration: "none",
  },
  "&:hover": {
    textDecoration: "none",
  },
}));
