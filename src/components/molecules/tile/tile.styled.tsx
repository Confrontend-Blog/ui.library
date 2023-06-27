import { Card, CardProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const dimensions = {
  '1x1': 1,
  '1x2': 2,
  '2x1': 0.5,
};

type StyledCardProps = {
  width: string;
  dimension: "1x1" | "1x2" | "2x1";
} & CardProps;

const StyledCard = styled(Card)<StyledCardProps>(({width, dimension}) => ({
  width: width,
  height: `calc(${width} * ${dimensions[dimension]})`,
}));

export default StyledCard;
