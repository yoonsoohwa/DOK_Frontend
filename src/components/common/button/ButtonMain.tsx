import { Button } from '@mui/material';

interface ButtonMainProps {
  text: string;
  fill?: boolean;
  onClick?: () => void;
  size?: 'large' | 'medium' | 'small';
}

export function ButtonMain({ text, fill, onClick, size }: ButtonMainProps) {
  return (
    <Button color="mainB" size={size} fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: '50px' }}>
      {text}
    </Button>
  );
}
