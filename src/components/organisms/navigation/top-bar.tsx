import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as S from "./top-bar.styled";
import React from "react";

interface TopBarProps {
  username: string;
  pageTitle: string;
}

const TopBar = ({ username, pageTitle }: TopBarProps) => {
  const [left, setLeft] = useState(<></>);
  const [right, setRight] = useState(<></>);
  const location = useLocation();

  useEffect(() => {
    setLeft(<>{pageTitle}</>);
    setRight(
      <>
        <ChatIcon />
        <NotificationsIcon />
        <span>{username}</span>
      </>
    );
  }, [location, username]);

  return (
    <S.NavigationWrapper>
      {left}
      {right && <S.ItemRightWrapper>{right}</S.ItemRightWrapper>}
    </S.NavigationWrapper>
  );
};

export default TopBar;
