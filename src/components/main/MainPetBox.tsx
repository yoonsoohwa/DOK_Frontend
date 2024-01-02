import { useState } from 'react';
import { styled } from 'styled-components';
import defaultImg from '/svg/dog_default_white.svg';
import Female from '/svg/gender_female.svg';
import Male from '/svg/gender_male.svg';

interface MainPetBoxProps {
  petData: {
    dogImg: string;
    dogName: string;
    gender: string;
  };
  className: string;
}

export function MainPetBox({ petData, className }: MainPetBoxProps) {
  const [petImg, setPetImg] = useState(true);

  return (
    <Pet className={`pet-box ${className}`}>
      <img className="pet-img" src={petImg ? petData.dogImg : defaultImg} />
      <div className="gender-name">
        <img src={petData.gender === 'Female' ? Female : Male} />
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
