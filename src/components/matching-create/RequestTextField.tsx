import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setRequestText } from "../../store";

export function RequestTextField() {
  const { requestText } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <TextField
      multiline
      rows={4}
      fullWidth
      value={requestText}
      onChange={(e) => {
        dispatch(setRequestText(e.target.value));
      }}
    />
  );
}
