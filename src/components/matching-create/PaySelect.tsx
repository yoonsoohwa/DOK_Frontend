import { TextField, InputAdornment, FormLabel, FormControl } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setErrorPaySelect, setPaySelect } from "../../store";
import { MonetizationOnOutlined } from "@mui/icons-material";

export function PaySelect() {
  const { paySelect, durationSelect, errorPaySelect } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();

  const handleError = (pay: number) => {
    // 최저시급은 상수로 따로 빼기 !!!
    if (pay < 9860 * durationSelect || Number.isNaN(pay)) {
      dispatch(setErrorPaySelect(true));
    } else {
      dispatch(setErrorPaySelect(false));
    }
  };

  const handleSetPay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pay = parseInt(event.target.value);
    handleError(pay);
    dispatch(setPaySelect(pay));
  };

  useEffect(() => {
    handleError(paySelect);
  }, [durationSelect]);

  return (
    <FormControl fullWidth>
      <FormLabel component="legend" htmlFor="pay">
        <MonetizationOnOutlined className="icon" />
        가격
      </FormLabel>
      <TextField
        name="pay"
        size="small"
        type="number"
        error={errorPaySelect && errorPaySelect !== undefined}
        id="outlined-error-helper-text"
        value={paySelect}
        onChange={handleSetPay}
        helperText={errorPaySelect && `*해당 시간 기준 최저 시급은 ${durationSelect * 9860}원 입니다.`}
        InputProps={{
          endAdornment: <InputAdornment position="end">원</InputAdornment>,
        }}
        inputProps={{
          step: 10,
        }}
        onBlur={() => {
          dispatch(setPaySelect(Math.floor(paySelect / 10) * 10));
        }}
      />
    </FormControl>
  );
}
