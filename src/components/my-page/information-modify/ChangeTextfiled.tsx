import styled from "styled-components";
import TextField from '@mui/material/TextField';



export const ChangeTextfiled = ( label: any , placeholder : string, id?: string, defaultValue?: string) => {
    const test = label;
    return (
        <MainFrame>
            <TextField
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    // helperText="Some important text"
                    sx={{width:"60%", margin:"10% 0 5% 0"}}
                />
        </MainFrame>
    )
}

const MainFrame = styled.div`
    
`