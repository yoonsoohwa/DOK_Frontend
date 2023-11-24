import { DesktopDateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export function DateSelect() {
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ padding: 0 }}>
        <DesktopDateTimePicker
          format="YYYY-MM-DD  h:m A"
          value={date}
          minDate={dayjs()}
          maxDate={dayjs().add(7, "day")}
          onChange={(newValue) => setDate(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
