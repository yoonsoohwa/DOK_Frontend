import styled from "styled-components";
import TextField from '@mui/material/TextField';

interface textFiledType {
    label : string,
    placeholder: string, 
    id?: string, 
    defaultValue?: string,
}

export const ChangeTextfiled = ( {label,placeholder,id,defaultValue} : textFiledType) => {
    
    return (
        <>
            <TextField
                    id={id}
                    label={label}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                    // helperText="Some important text"
                    sx={{width:"70%", margin:"3% auto 3% auto"}}
                />
        </>
    )
}
