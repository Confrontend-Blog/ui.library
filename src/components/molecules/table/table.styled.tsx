import { styled, Theme } from "@mui/material/styles";

export const TableWrapper = styled("table")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderCollapse: "collapse",
  width: "100%",
}));

type TableHeaderProps = {
  width?: string | number;
};

export const TableHeader = styled("th")<TableHeaderProps>(
  ({ theme, width }) => ({
    textAlign: "left",
    "&:first-child": {
      textAlign: "center",
    },
    backgroundColor: theme.palette.info.main,
    color: "#fff",
    height: "4em",
    width: width !== 150 ? width : "auto", // react-table default width is 150
  })
);

export const TableCell = styled("td")({
  textAlign: "left",
  "&:first-of-type": {
    textAlign: "center",
  },
});

type TableRowProps = {
  theme?: Theme;
};

export const TableRow = styled("tr")<TableRowProps>(({ theme }) => ({
  height: "4em",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:hover": {
    color: theme.palette.info.main,
    cursor: "pointer",
  },
}));
