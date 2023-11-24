import { Alert, AlertTitle, Backdrop, Box, Button, Snackbar } from "@mui/material";

interface type {
  title?: string;
  desc?: string;
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  icon?: false | React.ReactNode;
  buttonText?: string;
}

export function AlertError({ title, desc, open, onClose, onClick, icon, buttonText }: type) {
  return (
    <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Snackbar open={open} autoHideDuration={null} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="error" sx={{ width: 400, ".MuiAlert-message": { flexGrow: 1 } }} icon={icon}>
          <div className="pre-wrap">
            {title && <AlertTitle>{title}</AlertTitle>}
            {desc}
          </div>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end", gap: 1 }}>
            <Button
              variant="contained"
              color="redW"
              onClick={() => {
                onClick();
                onClose();
              }}
            >
              {buttonText || "확인"}
            </Button>
            <Button variant="outlined" color="redW" onClick={onClose}>
              취소
            </Button>
          </Box>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
