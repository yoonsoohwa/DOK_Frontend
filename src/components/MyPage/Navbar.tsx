import React from 'react';
import {styled} from "styled-components";
import {TabContext,TabList,TabPanel} from '@mui/lab';
import {Tab, Box} from '@mui/material';

export const Navbar = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TotalFrame>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="소개" value="1" />
                            <Tab label="요청" value="2" />
                            <Tab label="인증" value="3" />
                            <Tab label="개인정보 수정" value="4" />                    
                        </TabList>
                    </Box>
                        <TabPanel value="1">소개 세부</TabPanel>
                        <TabPanel value="2">요청 세부</TabPanel>
                        <TabPanel value="3">인증 세부</TabPanel>
                        <TabPanel value="4">개인정보 수정</TabPanel>
                </TabContext>
            </Box>
        </TotalFrame>
    )
}

const TotalFrame = styled.div`
    display: flex;    
    justify-content: flex-start;
    max-width: 900px;
    margin: 0% auto 0 auto;
    border: black solid 1px;
`