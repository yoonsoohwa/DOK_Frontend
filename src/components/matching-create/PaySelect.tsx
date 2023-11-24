import { TextField, InputAdornment } from "@mui/material";
import { error } from "console";
import { useState } from "react";

export function PaySelect() {
  const [error, setError] = useState(false);
  const [values, setValues] = useState(0);
  return (
    <TextField
      size="small"
      error={error}
      id="outlined-error-helper-text"
      value={values}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(Number(event.target.value));
      }}
      helperText={error && "Incorrect entry."}
      InputProps={{
        endAdornment: <InputAdornment position="end">원</InputAdornment>,
      }}
    />
  );
}
