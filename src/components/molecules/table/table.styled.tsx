import { styled, Theme } from '@mui/material/styles';

export const TableWrapper = styled('table')({
  backgroundColor: '#fff',
  borderCollapse: 'collapse',
  width: '100%',
});

type TableHeaderProps = {
  width?: string | number;
  theme: Theme;
};

export const TableHeader = styled('th')<TableHeaderProps>(({ theme, width }) => ({
  textAlign: 'left',
  '&:first-child': {
    textAlign: 'center',
  },
  backgroundColor: theme.palette.info.main,
  color: '#fff',
  height: '4em',
  width: width || 'auto',
}));

export const TableCell = styled('td')({
  textAlign: 'left',
  '&:first-child': {
    textAlign: 'center',
  },
});

type TableRowProps = {
  theme: Theme;
};

export const TableRow = styled('tr')<TableRowProps>(({ theme }) => ({
  height: '4em',
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.primary.main,
  },
  '&:hover': {
    color: theme.palette.info.main,
    cursor: 'pointer',
  },
}));
