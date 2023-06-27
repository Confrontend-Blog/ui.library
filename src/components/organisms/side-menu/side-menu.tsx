import React, { ComponentType } from "react";
import { ButtonBase, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import * as S from "./side-menu.styled";

interface SideMenuProps {
  logoutPath: string;
  logoutCb?: () => void;
  MenuItems: ComponentType;
}

function SideMenu({ logoutPath, logoutCb, MenuItems }: SideMenuProps) {
  return (
    <S.Wrapper>
      <S.LogoWrapper>
        <S.Logo />
      </S.LogoWrapper>
      <S.MenuItemsWrapper>
        <MenuItems />
      </S.MenuItemsWrapper>
      <S.MenuFooter>
        <Link to={logoutPath}>
          <ButtonBase onClick={logoutCb}>
            <ListItem>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <S.StyledListItemText primary="Logout" />
            </ListItem>
          </ButtonBase>
        </Link>
      </S.MenuFooter>
    </S.Wrapper>
  );
}

export default SideMenu;
