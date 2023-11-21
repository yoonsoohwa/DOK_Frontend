import React, { Children } from "react";
import { styled } from "styled-components";
import { MainPetBox } from "./MainPetBox";

interface type {
  pets: string[];
}

export function MainSection1({ pets }: type) {
  return (
    <Section>
      <PetsScrollBox>{Children.toArray(pets.map((data, idx) => <MainPetBox className={idx % 2 ? "right" : "left"} petData={data} />))}</PetsScrollBox>
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
  height: 300vh;
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
