import { FormControl, InputAdornment, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import dog from "/svg/dog_default.svg";
import { useEffect, useState } from "react";
import { AppDispatch, RootState, setDogSelect } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { DogType } from "src/types";

export function DogSelect() {
  const { dogSelect } = useSelector((state: RootState) => state.matchingCreate);
  const dispatch = useDispatch<AppDispatch>();
  const [dogs, setDogs] = useState<DogType[]>();

  const handleChange = (e: SelectChangeEvent) => {
    const selected = dogs ? dogs.filter(({ dogName }) => dogName === e.target.value)[0] : null;
    dispatch(setDogSelect(selected));
    console.log(dogSelect);
  };

  useEffect(() => {
    (async () => {
      const res = await fetch("/src/api/mock/dogs.json");
      const data = await res.json();
      setDogs(data);
    })();
  }, []);

  return (
    <FormControl sx={{ minWidth: 120 }} fullWidth>
      <Select
        startAdornment={
          <InputAdornment position="start">
            <img src={dogSelect?.dogImg || dog} style={{ height: "2em", aspectRatio: " 1 / 1", objectFit: "cover" }} />
          </InputAdornment>
        }
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={dogSelect?.dogName || ""}
        onChange={handleChange}
      >
        {dogs?.map(({ dogName }, idx) => [
          <MenuItem key={idx} value={dogName}>
            {dogName}
          </MenuItem>,
        ])}
      </Select>
    </FormControl>
  );
}
