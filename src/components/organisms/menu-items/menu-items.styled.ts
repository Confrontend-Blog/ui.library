import { styled } from "@mui/system";
import ChatIcon from "@mui/icons-material/Chat";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Description";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AuthorIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import { ListItem, ListItemText } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const createStyledIcon = (IconComponent: OverridableComponent<any>) => {
  return styled(IconComponent)(({ theme }) => ({
    color: theme.palette.primary.main,
  }));
};

export const StyledDashboardIcon = createStyledIcon(DashboardIcon);
export const StyledComposerIcon = createStyledIcon(EditNoteIcon);
export const StyledAuthorIcon = createStyledIcon(AuthorIcon);
export const StyledArticleIcon = createStyledIcon(ArticleIcon);
export const StyledChatIcon = createStyledIcon(ChatIcon);
export const StyledSettingsIcon = createStyledIcon(SettingsIcon);

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "&.active": {
    color: theme.palette.error.main, // Change the active color here
  },
  color: theme.palette.primary.main,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledListItem = styled(ListItem)<{ $isActive?: boolean }>(
  ({ $isActive, theme }) => ({
    "&.MuiSvgIcon-root": {
      color: $isActive ? theme.palette.info.main : "inherit",
    },
    "&.MuiListItemText-root": {
      color: $isActive ? theme.palette.info.main : "inherit",
    },
    "&:hover": {
      cursor: "pointer",
      "& .MuiSvgIcon-root": {
        color: theme.palette.info.main,
      },
      "& .MuiListItemText-root": {
        color: theme.palette.info.main,
      },
    },
  })
);
