import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DogDetail } from "./DogDetail";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { DogCard } from "./DogCard";

export const DogButton = () => {
    const [clicked, setClicked] = useState(false);
    const { dog } = useSelector((state: RootState) => state.user);

    return (
        <>
            {dog ? dog.map((item) => <DogCard 
                dogImg={item.dogImg}
                key={item._id} 
                dogName={item.dogName} 
                birth={item.birth}
                gender={item.gender} 
                dogType={item.dogType} 
                personality={item.personality}
                note={item.note}/>) 
            : null}
            {clicked ? <DogDetail /> : <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>}
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

