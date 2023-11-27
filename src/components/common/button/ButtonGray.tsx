import { Button } from "@mui/material";

interface ButtonGrayProps {
  text: string;
  fill?: boolean;
  onClick?: () => void;
}

export function ButtonGray({ text, fill, onClick }: ButtonGrayProps) {
  return (
    <Button color="grayB" fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
