import React, { Children } from "react";
import { styled } from "styled-components";
import { MainPetBox } from "./MainPetBox";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function MainSection1() {
  const { dogs } = useSelector((state: RootState) => state.main);

  return (
    <Section>
      <PetsScrollBox>
        {Children.toArray(dogs.map(({ dogImg, dogName, gender }, idx) => <MainPetBox className={idx % 2 ? "right" : "left"} petData={{ dogImg, dogName, gender }} />))}
      </PetsScrollBox>
      <TitleBox>
        <div>
          도크와
          <br />
          함께한
          <br />
          강아지들
          <br />
          <img src="/image/maltiz_retriever.png" />
        </div>
      </TitleBox>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  height: 166vw;
  background-color: ${({ theme }) => theme.main3};
`;

const PetsScrollBox = styled.div`
  width: 65%;
  height: 100vh;
  box-sizing: border-box;
  padding: 50px 0 0 50px;
  position: relative;
`;

const TitleBox = styled.div`
  width: 35%;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 40px;
  box-sizing: border-box;

  text-align: right;
  font-size: 7vw;
  font-family: "Elice DX Neolli";
  font-weight: 900;
  color: ${({ theme }) => theme.main};
  line-height: 124%;
  text-shadow: 5px 5px #fff7c7;
`;
