import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Clear, Search } from "@mui/icons-material";

export function TopBarFilter() {
  const [area, setArea] = useState("집");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [open, setOpen] = useState(false);

  const handleChangeArea = (event: SelectChangeEvent) => {
    setArea(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <Section>
      <TextField fullWidth id="outlined-required" label="지역 선택" onClick={handleClickOpen} value={area} InputProps={{ readOnly: true }} size="small" />
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>검색할 지역을 선택해주세요</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 180 }}>
              <InputLabel htmlFor="demo-dialog-native">도/시</InputLabel>
              <Select
                value={area}
                onChange={handleChangeArea}
                input={<OutlinedInput label="도/시" id="demo-dialog-native" />}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8, //ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
                      width: 200,
                    },
                  },
                }}
              >
                <MenuItem value={"서울특별시 강남구 오동통(집)"}>집</MenuItem>
                <MenuItem value={"경기도 용인시 처인구 유림동"}>서울특별시</MenuItem>
                <MenuItem value={"경기도 용인시 처인구 유림동"}>경기도 용인시</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">구</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={area}
                input={<OutlinedInput label="구" />}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8, //ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
                      width: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">동</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={area}
                input={<OutlinedInput label="동" />}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 48 * 4.5 + 8, //ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
                      width: 200,
                    },
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>

      <DateSection>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]} sx={{ width: "200px" }}>
            <DesktopDatePicker format="YYYY-MM-DD" label="날짜 선택" value={date} onChange={(newValue) => setDate(newValue)} slotProps={{ textField: { size: "small" } }} />
          </DemoContainer>
        </LocalizationProvider>
        {date && (
          <IconButton className="date-clear" onClick={() => setDate(null)}>
            <Clear />
          </IconButton>
        )}
      </DateSection>

      <MyButton variant="contained" color="grayB" startIcon={<Search />} sx={{ minWidth: "10px", marginLeft: "8px", padding: "10px 15px", span: { margin: "0 " } }}></MyButton>
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  max-width: 500px;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: end;

  > div {
    margin-left: 8px;
  }
`;

const DateSection = styled.div`
  position: relative;
  .date-clear {
    position: absolute;
    top: 8px;
    right: 28px;
  }
`;
const MyButton = styled(Button)`
  padding-left: 8px;
`;
