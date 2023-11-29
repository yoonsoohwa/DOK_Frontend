import { Alert, AlertTitle, Backdrop, Box, Button, Snackbar } from '@mui/material';

interface AlertErrorProps {
  title?: string;
  desc?: string;
  open: boolean;
  onClose?: () => void;
  onClick?: () => void;
  buttonText?: string;
}

export function AlertError({ title, desc, open, onClose, onClick, buttonText }: AlertErrorProps) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Snackbar open={open} autoHideDuration={null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" sx={{ minWidth: 400, '.MuiAlert-message': { flexGrow: 1 } }}>
          <div className="pre-wrap">
            {title && <AlertTitle>{title}</AlertTitle>}
            {desc}
          </div>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            {onClick && (
              <Button
                variant="contained"
                color="redW"
                onClick={() => {
                  onClick();
                }}
              >
                {buttonText || '확인'}
              </Button>
            )}
            {onClose && (
              <Button variant="outlined" color="redW" onClick={onClose}>
                취소
              </Button>
            )}
          </Box>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
