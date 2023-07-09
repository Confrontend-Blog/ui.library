import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "../../../utils/styled";

const StyledDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Loading = () => {
  return (
    <StyledDiv data-testid="loading">
      <CircularProgress size={60} color="secondary" />
    </StyledDiv>
  );
};

export { Loading };
