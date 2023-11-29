import { Alert, AlertTitle, Backdrop, Box, Button, Snackbar } from '@mui/material';

interface AlertSuccessProps {
  title?: string;
  desc?: string;
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  icon?: false | React.ReactNode;
  buttonText?: string;
}

export function AlertSuccess({ title, desc, open, onClose, onClick, icon, buttonText }: AlertSuccessProps) {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert color="info" sx={{ minWidth: 400, '.MuiAlert-message': { flexGrow: 1 } }} icon={icon}>
          <div className="pre-wrap">
            {title && <AlertTitle>{title}</AlertTitle>}
            {desc}
          </div>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => {
                onClick();
                onClose();
              }}
            >
              {buttonText || '확인'}
            </Button>
            <Button variant="outlined" onClick={onClose}>
              취소
            </Button>
          </Box>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
