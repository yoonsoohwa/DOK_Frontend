import { Alert, Snackbar } from '@mui/material';

interface AlertSnackbarProps {
  title?: string;
  desc?: string;
  open: boolean;
  onClose: () => void;
  icon?: false | React.ReactNode;
  duration?: number;
  type?: 'success' | 'error';
}

export function AlertBottom({ title, desc, open, onClose, icon, duration, type }: AlertSnackbarProps) {
  return (
    <Snackbar open={open} onClose={onClose} autoHideDuration={duration || 3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <Alert variant="filled" severity={type || 'success'} color={type === 'error' ? undefined : 'info'} sx={{ minWidth: 200, '.MuiAlert-message': { flexGrow: 1 } }} icon={icon}>
        <div className="pre-wrap">
          {title} {desc}
        </div>
      </Alert>
    </Snackbar>
  );
}
