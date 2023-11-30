import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DogDetail } from "./DogDetail";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { DogCard } from "./DogCard";

export const DogButton = () => {
    const [clicked, setClicked] = useState(false);
    const [isAddButton, setIsAddButton] = useState(true);
    const { dog } = useSelector((state: RootState) => state.user);

    const handleAddBtn = () => {
        setClicked(!clicked)
        setIsAddButton(false);
    }

    return (
        <>
        {/* <AddButton onClick={() => setClicked(!clicked)}>+</AddButton> */}
            {dog ? dog.map(() => <DogCard />) : null}
            <AddButton onClick={handleAddBtn}>+</AddButton>            
            {clicked && isAddButton ? <DogDetail /> : <AddButton onClick={handleAddBtn}>+</AddButton>}
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

