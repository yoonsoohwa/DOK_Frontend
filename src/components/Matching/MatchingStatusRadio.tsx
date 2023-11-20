import { styled } from "styled-components";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { useState, MouseEvent } from "react";

export function MatchingStatusRadio() {
    const [selectStatus, setSelectStatus] = useState('waiting');

    const handleClick: React.MouseEventHandler<HTMLLabelElement> = (e: any) => {
        setSelectStatus(e.target.value);
    }

  return (
    <div>
      <MyRadioGroup row name="row-radio-buttons-group">
        <FormControlLabel value="waiting" control={<Radio />} label="매칭중" onClick={handleClick} />
        <FormControlLabel value="ready" control={<Radio />} label="매칭완료" onClick={handleClick} />
        <FormControlLabel value="done" control={<Radio />} label="매칭종료" onClick={handleClick} />
      </MyRadioGroup>
    </div>
  );
}

const MyRadioGroup = styled(RadioGroup)`
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    justify-content: end;
`;