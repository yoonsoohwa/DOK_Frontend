import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { DogButton } from './DogButton';
import { Height, Padding } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from 'store/index';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
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
        <div className="image">
          <img
            // src={imagePath} // 기본 이미지 설정 (선택된 이미지가 없을 때 표시될 이미지)
            src={dogImg ? dogImg : imagePath}
          />
        </div>
        <InfoFrame>
          <div className="name">
            <div>
              <img src="/svg/dog_default.svg" alt="강아지아이콘" style={{ marginRight: '2.5px' }} />
            </div>
            <div>
              <TextField
                disabled
                value={dogName}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '5% 5% 5% 5%',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    width: '210px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
          </div>
          <div className="species">
            <div>견종</div>
            <div>
              <TextField
                disabled
                value={dogType}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '5% 5% 5% 5%',
                    fontSize: '15px',
                    width: '210px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
          </div>
          <div className="age">
            <div>나이</div>
            <div>
              <TextField
                disabled
                value={birth}
                // value="테스트"
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '5% 5% 5% 5%',
                    fontSize: '15px',
                    width: '210px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
          </div>
          <div className="gender">
            <div>성별</div>
            <div>
              <TextField
                disabled
                value={
                  gender === 'male' || gender === 'Male' ? '남자' : gender === 'female' || gender === 'Female' ? '여자' : gender === 'other' || gender === 'Other' ? '중성' : gender
                }
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '5% 5% 5% 5%',
                    fontSize: '15px',
                    width: '210px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
          </div>
          <div className="character">
            <div>성격</div>
            <div>
              <TextField
                placeholder="반려견의 나이를 작성해주세요"
                disabled
                value={personality === 'calm' ? '얌전' : personality === 'active' ? '활발' : personality === 'sensitive' ? '예민' : personality}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '5% 5% 5% 5%',
                    fontSize: '15px',
                    width: '210px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
          </div>
          <div className="note">
            <div>특이사항</div>
            <div>
              {/* 해당 부분 글이 길어지면 해당 부분에만 스크롤 생기게끔 해야함. 전체적인 틀이 무너지면 안됨. */}
              <TextField
                placeholder="특이사항이 없습니다."
                disabled
                value={note}
                multiline
                rows={2}
                sx={{
                  overflowY: 'auto',
                  '& .MuiInputBase-input': {
                    width: '240px',
                    padding: '0% 0% 0% 0%',
                    fontSize: '12px',
                  },
                  '& .MuiInputBase-input.Mui-disabled': {
                    WebkitTextFillColor: '#000000',
                  },
                  '& fieldset': { border: 'none' },
                }}
              />
            </div>
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

  margin: 3% auto;

  div.image {
    width: 280px;
    height: 220px;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;

  div.name {
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

  div.species {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.age {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.gender {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.character {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.note {
    display: flex;
    margin-top: 3%;
    flex-direction: column;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 78px;
    }
    div:nth-child(2) {
      margin: 2% 0 0 4%;
    }
  }

  div.button {
    display: flex;
    justify-content: space-around;

    margin-top: 3%;
  }
`;
