import { Button, TextField } from '@mui/material';
import { useState} from 'react';

interface Chk {
    phoneCheck? : boolean | undefined;
}

export const PhoneCertification = (phoneCheck : Chk) => {
    
    const handleCertify = () => {
        alert("본인인증 로직 구현");
    }

    return (
        <>
        {/* phoneCheck값이 있는 경우 = 참인 경우 = 제대로 작성한 경우 */}
        {phoneCheck !== null
        ? <TextField
            id="loginID"
            label="전화번호"
            // placeholder="01012341234"
            defaultValue="010"
            helperText="* 하이픈(-)없이 01012341234 형태로 작성해 주세요"
            sx={{width:"60%", margin:"0% 0 5% 0"}}
        />
        : <TextField
            error
            id="loginID"
            label="전화번호"
            // placeholder="01012341234"
            defaultValue="010"
            helperText="* 하이픈(-)없이 01012341234 형태로 작성해 주세요"
            sx={{width:"60%", margin:"0% 0 5% 0"}}
        />}
                            
            {/* <Button constiant="contained" color="mainB" onClick={handleCertify} sx={{margin: "0% 0% 0 2.5%" ,transform: "translateY(-75%)"}}>본인인증</Button> */}
            <Button variant="contained" color="mainB" sx={{margin: "0% 0% 0 2.5%" ,transform: "translateY(-75%)"}} onClick={handleCertify}>본인인증</Button>
        </>
    )
}


