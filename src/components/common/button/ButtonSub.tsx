import { Button } from "@mui/material";

interface textType {
  text: string;
  fill?: boolean;
  onClick?: () => void;
}

export function ButtonSub({ text, fill, onClick }: textType) {
  return (
    <Button color="sub2B" fullWidth={fill} onClick={onClick} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
