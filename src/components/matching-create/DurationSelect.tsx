import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setDurationSelect, setPaySelect } from "../../store";

export function DurationSelect() {
  const { durationSelect } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const duration = Number(event.target.value);
    dispatch(setDurationSelect(duration));
    dispatch(setPaySelect(duration * 9860));
  };

  return (
    <FormControl>
      <RadioGroup row name="" value={durationSelect} onChange={handleChange}>
        <FormControlLabel value={0.5} control={<Radio />} label="30분" />
        <FormControlLabel value={1} control={<Radio />} label="1시간" />
        <FormControlLabel value={1.5} control={<Radio />} label="1시간 30분" />
        <FormControlLabel value={2} control={<Radio />} label="2시간" />
      </RadioGroup>
    </FormControl>
  );
}
