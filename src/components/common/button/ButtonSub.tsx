import { Button } from "@mui/material";

interface ButtonSubProps {
  text: string;
  fill?: boolean;
  onClick?: () => void;
}

export function ButtonSub({ text, fill, onClick }: ButtonSubProps) {
  return (
    <Button color="sub2B" fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
