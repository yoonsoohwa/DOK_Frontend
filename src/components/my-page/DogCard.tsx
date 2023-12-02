import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

import calculateAge from '../../utils/calculateAge';
import dayjs from 'dayjs';

interface DogType {
  dogName: string;
  birth: string | Date;
  gender: string;
  dogType: string;
  personality: string;
  note: string;
  dogImg: string;
}

export const DogCard = ({ dogName, gender, birth, dogType, personality, note, dogImg }: DogType) => {
  const [imagePath, setImagePath] = useState<string>('/dok_logo.png'); // 기본 이미지 설정

  return (
    <>
      <TotalFrame>
        <img
          // src={imagePath} // 기본 이미지 설정 (선택된 이미지가 없을 때 표시될 이미지)
          src={dogImg ? dogImg : imagePath}
        />
        <InfoFrame>
          <div className="name">
            <div>
              <img src="/svg/dog_default.svg" alt="강아지아이콘" style={{ marginRight: '2.5px' }} />
            </div>
            <div>{dogName}</div>
          </div>
          <div className="species">
            <div>견종</div>
            <div>{dogType}</div>
          </div>
          <div className="age">
            <div>나이</div>
            <div>
              {calculateAge(birth.toString())} <span>({dayjs(birth).format('MM/DD/YYYY')})</span>
            </div>
          </div>
          <div className="gender">
            <div>성별</div>
            <div>
              {gender === 'male' || gender === 'Male' ? '남자' : gender === 'female' || gender === 'Female' ? '여자' : gender === 'other' || gender === 'Other' ? '중성' : gender}
            </div>
          </div>
          <div className="character">
            <div>성격</div>
            <div>{personality === 'calm' ? '얌전' : personality === 'active' ? '활발' : personality === 'sensitive' ? '예민' : personality}</div>
          </div>
          <div className="note">
            <div>특이사항</div>
            <div className="custom-scrollbar">{note || '없음'}</div>
          </div>
        </InfoFrame>
      </TotalFrame>
    </>
  );
};

const TotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: #fcd11e dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  padding: 20px;
  box-sizing: border-box;

  margin: 3% 1%;

  > img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 6px;
  }
`;

const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: border-box;
  flex-wrap: wrap;

  > div {
    display: flex;
    margin-top: 8px;

    div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      color: #8d8d8d;
    }
    div:nth-child(2) {
      margin-left: 10px;
      span {
        color: #9f9f9f;
      }
    }
  }

  .name {
    display: flex;
    margin-top: 1%;
    align-items: center;

    div img {
      display: flex;
      justify-self: center;
      align-self: center;
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    div:nth-child(2) {
      margin-left: 2%;
    }
  }

  .note {
    flex-direction: column;
    height: 100%;
    flex: 1 1 0;

    div:nth-child(1) {
      width: 80px;
    }
    div:nth-child(2) {
      margin: 8px 0 0 10px;
      box-sizing: border-box;
      padding: 8px;
      border-radius: 4px;
      background-color: #f7f7f7;
      height: 100%;
      max-height: 60px;
      overflow-y: auto;
      font-size: 14px;
    }
  }

  div.button {
    display: flex;
    justify-content: space-around;

    margin-top: 3%;
  }
`;
