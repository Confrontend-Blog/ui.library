import React, { ReactNode } from "react";
import { Loading } from "./loading";

type WithLoadingProps = {
  isLoading: boolean;
  children: JSX.Element;
};

const WithLoading = ({
  isLoading,
  children,
}: WithLoadingProps): JSX.Element => {
  if (isLoading) {
    return <Loading />;
  }

  return children;
};

export { WithLoading };
