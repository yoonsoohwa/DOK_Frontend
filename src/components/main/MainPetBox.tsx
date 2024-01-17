import { useState } from 'react';
import defaultImg from '/svg/dog_default_white.svg';
import Female from '/svg/gender_female.svg';
import Male from '/svg/gender_male.svg';
import { Pet } from './MainPetBox.styled';

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
