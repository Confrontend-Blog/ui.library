import { styled } from "@mui/system";

export const loginBoxWidth = "25em";

export const LoginWrapper = styled('div')({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
  gridColumnGap: '0px',
  gridRowGap: '0px',
  alignItems: 'center',
  justifyItems: 'center',
  backgroundColor: '#2CA58D',
});

export const LoginBoxWrapper = styled('div')({
  '& h1': {
    height: '3em',
  },
});

export const LoginBox = styled('div')(({ theme }) => ({
  borderRadius: '0.5em',
  padding: '1em',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  height: '25em',
  width: loginBoxWidth,
  backgroundColor: '#fff',
  color: '#111',
}));

export const LoginFrom = styled('form')({
  // height: '10em',
});

export const LoginInputWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 0 2em 0',
  '& label': {
    paddingBottom: '0.5em',
    fontWeight: 'bold',
  },
  '& input': {
    height: '2.5em',
    border: '0',
    borderRadius: '1em',
    padding: '1em',
    fontSize: '1em',
    backgroundColor: '#ddd',
  },
});

export const LoginSubmitInput = styled('input')({
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1em',
  height: '2.5em',
  border: '0',
  padding: '0.5em',
  width: '100%',
  borderRadius: '1em',
  backgroundColor: '#333',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#0384fc',
  },
});

export const LoginParagraph = styled('p')(({ theme }) => ({
  padding: '0.3em 0.5em 0.2em 0.5em',
  color: '#eee',
  wordWrap: 'break-word',
  width: loginBoxWidth,
}));
