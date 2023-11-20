import { Button } from "@mui/material";

export function HandlerRequestButton() {
  return (
    <Button variant="contained" color="mainB" size="large" sx={{ width: "200px", borderRadius: "50px", fontWeight: 600, margin: "30px 0" }}>
      핸들러 신청하기
    </Button>
  );
}