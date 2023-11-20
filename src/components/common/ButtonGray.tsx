import { Button } from "@mui/material";

interface textType {
  text: string;
  fill?: boolean;
}

export function ButtonGray({ text, fill }: textType) {
  return (
    <Button color="grayB" fullWidth={fill} variant="contained" sx={{ borderRadius: "50px" }}>
      {text}
    </Button>
  );
}
