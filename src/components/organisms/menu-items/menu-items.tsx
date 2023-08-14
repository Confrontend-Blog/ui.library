import { ButtonBase, List, ListItemIcon } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import * as S from "./menu-items.styled";
import React, { ComponentType } from "react";

interface MenuItem {
  path: string;
  Icon: ComponentType;
  text: string;
}

export interface MenuItemsProps {
  items: MenuItem[];
}

const MenuItems = ({ items }: MenuItemsProps) => {
  const isActiveRoute = (route: string) => location.pathname === route || false;
  const location = useLocation();

  return (
    <List>
      {items.map(({ path, Icon, text }) => (
        <Link to={path}>
          <ButtonBase>
            <S.StyledListItem $isActive={isActiveRoute(path)}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <S.StyledListItemText primary={text} />
            </S.StyledListItem>
          </ButtonBase>
        </Link>
      ))}
    </List>
  );
};

export { MenuItems };
