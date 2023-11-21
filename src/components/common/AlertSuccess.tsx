import { Alert, AlertTitle, Backdrop, Box, Button, Snackbar } from "@mui/material";
import { useState } from "react";

interface type {
  handleClick: () => void;
  icon?: false | React.ReactNode;
  buttonText?: string;
}

export function AlertSuccess({ handleClick, icon, buttonText }: type) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Snackbar open={open} autoHideDuration={null} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert color="info" sx={{ width: 400, ".MuiAlert-message": { flexGrow: 1 } }} icon={icon}>
          <div style={{ width: "100%" }}>
            <AlertTitle>Success</AlertTitle>
            This is a success message!
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Button
                variant="contained"
                onClick={() => {
                  handleClick();
                  handleClose();
                }}
              >
                {buttonText || "확인"}
              </Button>
              <Button variant="outlined" onClick={handleClose}>
                취소
              </Button>
            </Box>
          </div>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
