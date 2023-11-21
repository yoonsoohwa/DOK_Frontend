import { Button } from "@mui/material";

interface textType {
  text: string;
  fill?: boolean;
}

export function ButtonMain({ text, fill }: textType) {
  return (
    <Button color="mainB" fullWidth={fill} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
