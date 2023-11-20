import { useState } from "react";
import { styled } from "styled-components";
import { DogDetail } from "./DogDetail";

export const DogButton = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
            {clicked ? <DogDetail /> : <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>}
            {/* <AddButton onClick={() => setClicked(!clicked)}>+</AddButton> */}
        </>
    )
}

const AddButton = styled.button`    
    display: flex;
    justify-content: center;
    align-items: center;

    border: black dashed 3px;
    border-radius: 10px;

    width: 40%;
    height: 600px;
    font-size: 200px;
    color: gray;
    background-color: #ffffff;

    margin: 3% auto;
`

