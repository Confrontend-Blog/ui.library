import { styled } from "@mui/system";

export const ProgressBarWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '4px',
  zIndex: 100,
});

export const ProgressBar = styled('div')(({ color }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  backgroundColor: color,
  transition: 'width 0.25s ease-in-out',
}));
