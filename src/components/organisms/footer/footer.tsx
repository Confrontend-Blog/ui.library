import * as S from "./footer.styled";
import React from "react";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterNav>
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </S.FooterNav>
    </S.FooterWrapper>
  );
};

export { Footer };
