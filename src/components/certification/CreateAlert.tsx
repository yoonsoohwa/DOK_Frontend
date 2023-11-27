import { Alert, AlertTitle, Button } from "@mui/material";
import { useNavigate } from "react-router";
import styled from "styled-components";

export function CreateAlert() {
  const navigate = useNavigate();

  return (
    <AlertCustom
      severity="error"
      action={
        <Button variant="contained" color="redW" onClick={() => navigate("/mypage")} size="large">
          인증하러 가기
        </Button>
      }
    >
      <AlertTitle>등록하지 않은 인증 글이 있습니다.</AlertTitle>
      이뽀삐 | 2023-11-23 12:00 am {`외 10건`}
    </AlertCustom>
  );
}

const AlertCustom = styled(Alert)`
  margin: 20px 14px 0;

  position: -webkit-sticky;
  position: sticky;
  top: 90px;
  z-index: 20;

  .MuiAlert-icon {
    padding: 10px 0;
  }

  .MuiAlertTitle-root {
    font-size: 1.4em;
    font-weight: 700;
  }

  .MuiAlert-action {
    padding: 16px 10px;
  }
`;
