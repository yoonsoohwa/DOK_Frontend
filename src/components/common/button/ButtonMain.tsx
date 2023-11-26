import { Button } from "@mui/material";

interface ButtonMainProps {
  text: string;
  fill?: boolean;
  onClick?: () => void;
}

export function ButtonMain({ text, fill, onClick }: ButtonMainProps) {
  return (
    <Button color="mainB" fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
