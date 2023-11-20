import { Button } from "@mui/material";

interface textType {
  text: string;
  fill?: boolean;
}

export function ButtonSub({ text, fill }: textType) {
  return (
    <Button color="sub2B" fullWidth={fill} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
