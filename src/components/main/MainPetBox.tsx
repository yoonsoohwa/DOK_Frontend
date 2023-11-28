import React from 'react';
import { styled } from 'styled-components';

interface MainPetBoxProps {
  petData: {
    dogImg: string;
    dogName: string;
    gender: string;
  };
  className: string;
}

export function MainPetBox({ petData, className }: MainPetBoxProps) {
  return (
    <Pet className={className}>
      <img className="pet-img" src={petData.dogImg} />
      <div className="gender-name">
        <img src="/svg/gender_female.svg" />
        <div>{petData.dogName}</div>
      </div>
    </Pet>
  );
}

const Pet = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18vw;

  &.left {
    float: left;
  }

  &.right {
    float: right;
  }

  &:nth-child(2) {
    margin-top: 26vw;
  }

  .gender-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 4vw;
    }

    div {
      font-family: 'Gaegu';
      font-weight: 900;
      font-size: 3vw;
      color: #3e3e3e;
      height: 1em;
    }
  }

  .pet-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
    border-radius: 50%;
  }
`;
