import { Alert, AlertTitle, Backdrop, Box, Button, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOpenAlertLogin } from 'store/alertSlice';
import { AppDispatch, RootState } from 'store/store';

interface AlertErrorProps {
  isBack?: boolean;
}

export function AlertLogin({ isBack }: AlertErrorProps) {
  const { openAlertLogin } = useSelector((state: RootState) => state.alert);
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();

  const handleClick = () => {
    nav('/login');
  };

  const handleCancle = () => {
    dispatch(setOpenAlertLogin(false));
    if (isBack) {
      nav(-1);
    }
  };

  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openAlertLogin}>
      <Snackbar open={openAlertLogin} autoHideDuration={null} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity="error" sx={{ minWidth: 400, '.MuiAlert-message': { flexGrow: 1 } }}>
          <div className="pre-wrap">
            <AlertTitle>로그인 하시겠습니까?</AlertTitle>
            로그인이 필요한 서비스입니다. 계정이 없는 경우 회원가입을 진행해주세요.
          </div>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            <Button variant="contained" color="redW" onClick={handleClick}>
              확인
            </Button>
            <Button variant="outlined" color="redW" onClick={handleCancle}>
              취소
            </Button>
          </Box>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
}
