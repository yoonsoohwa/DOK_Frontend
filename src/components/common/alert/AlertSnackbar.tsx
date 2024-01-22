import { Alert, AlertTitle, Box, Snackbar } from '@mui/material';

interface AlertSnackbarProps {
  title?: string;
  desc?: string;
  open: boolean;
  onClose: () => void;
  icon?: false | React.ReactNode;
  duration?: number;
  type?: 'success' | 'error';
}

export function AlertSnackbar({ title, desc, open, onClose, icon, duration, type }: AlertSnackbarProps) {
  return (
    <Snackbar open={open} onClose={onClose} autoHideDuration={duration || 3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert severity={type || 'success'} color={type === 'error' ? undefined : 'info'} sx={{ minWidth: 400, '.MuiAlert-message': { flexGrow: 1 } }} icon={icon}>
        <div className="pre-wrap">
          {title && <AlertTitle>{title}</AlertTitle>}
          {desc}
        </div>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}></Box>
      </Alert>
    </Snackbar>
  );
}
