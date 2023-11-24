import { Button } from "@mui/material";

interface textType {
  text: string;
  fill?: boolean;
  onClick?: () => void;
}

export function ButtonGray({ text, fill, onClick }: textType) {
  return (
    <Button color="grayB" fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
