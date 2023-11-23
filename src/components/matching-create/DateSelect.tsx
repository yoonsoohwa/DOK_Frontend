import { DesktopDateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setDateSelect, setErrorDateSelect } from "../../store";

export function DateSelect() {
  const { dateSelect } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (newValue: Dayjs | null) => {
    dispatch(setDateSelect(newValue?.format()));
  };

  useEffect(() => {
    dispatch(setDateSelect(dayjs().add(1, "hour").startOf("hour").format()));
  }, []);

  useEffect(() => {
    if (!dateSelect) {
      dispatch(setErrorDateSelect(true));
    } else {
      dispatch(setErrorDateSelect(false));
    }
  }, [dateSelect]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]} sx={{ padding: 0 }}>
        <DesktopDateTimePicker
          format="YYYY-MM-DD  h:m A"
          value={dateSelect ? dayjs(dateSelect) : null}
          minDateTime={dayjs().add(1, "hour").startOf("hour")}
          maxDate={dayjs().add(7, "day").endOf("day")}
          onChange={handleChange}
          slotProps={{ textField: { size: "small" } }}
          onError={(e) => dispatch(setErrorDateSelect(true))}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
