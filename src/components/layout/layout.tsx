import { ReactNode } from "react";

import * as S from "./layout.styled";

import { Footer } from "../footer/footer";
import React from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Wrapper>
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrapper>
  );
};

export default Layout;
function useRoute() {
  throw new Error("Function not implemented.");
}
