import {styled} from 'styled-components';
import { HandlerSelector } from './HandlerSelector';
import {Button} from "@mui/material";

export function HandlerSelectContainer() {
    return(
        <HandlerSelectLayout>
            <HandlerSelector />
            <Button variant='contained' color='mainB'>
                매칭하기
            </Button>
        </HandlerSelectLayout>
    )
}

const HandlerSelectLayout = styled.div`
    display: flex;
    margin-top: 15px;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`