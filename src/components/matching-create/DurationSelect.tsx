import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { time } from "console";
import { useState } from "react";

export function DurationSelect() {
  const [time, setTime] = useState(30);
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={time}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTime(Number(event.target.value));
        }}
      >
        <FormControlLabel value={30} control={<Radio />} label="30분" />
        <FormControlLabel value={60} control={<Radio />} label="1시간" />
        <FormControlLabel value={90} control={<Radio />} label="1시간 30분" />
        <FormControlLabel value={120} control={<Radio />} label="2시간" />
      </RadioGroup>
    </FormControl>
  );
}
