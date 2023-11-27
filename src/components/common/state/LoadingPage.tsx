import { Backdrop, CircularProgress } from "@mui/material";

export function LoadingPage() {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: "9999" }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
