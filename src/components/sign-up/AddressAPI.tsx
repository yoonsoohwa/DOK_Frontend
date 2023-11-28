import { Button, TextField } from '@mui/material';
import { useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

interface Chk {
    addressCheck? : boolean | undefined;
}

export const AddressAPI = (addressCheck : Chk): JSX.Element => {

    const [openPostcode, setOpenPostcode] = useState<boolean>(false);
    const [addressName, setAddressName] = useState("");

    const handleSearch = () => {
        setOpenPostcode(current => !current);
    }

    const handleSelectAddress = (data : any) => {            
            setAddressName(data.address);
            setOpenPostcode(false);
            console.log(addressCheck);
    }
    
    return (
        <>
        {/* addressCheck값이 있는 경우 = 참인 경우 = 제대로 작성한 경우 */}
        {addressCheck !== null
        ? <TextField
            // error
            label={addressName}                    
            disabled
            sx={{width:"60%", margin:"0 0 5% 0"}}
        />
        : <TextField
            error
            label={addressName} 
            // disabled
            sx={{width:"60%", margin:"0 0 5% 0"}}
        />
        }
            <Button variant="contained" color="mainB" sx={{margin: "0% 0% 5% 2.5%"}} onClick={handleSearch}>주소검색</Button>

            {openPostcode && 
                <DaumPostcode 
                    onComplete={handleSelectAddress}  // 값을 선택할 경우 실행되는 이벤트
                    autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                    defaultQuery='' // 팝업을 열때 기본적으로 입력되는 검색어 
            />}
        </>
    )
}


