import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setDog } from 'store/index';
import { Link } from 'react-router-dom';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { DogButton } from './DogButton';
import { title } from 'process';
import { AlertError } from 'common/alert/AlertError';
import defaultImage from '/image/dogDefaultImage.png';
import { ImageSearchRounded } from '@mui/icons-material';

export const DogDetail = () => {
  const [clicked, setClicked] = useState(false);
  const [addCard, setAddCard] = useState(true);
  const [open, setOpen] = useState(true);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [imagePath, setImagePath] = useState<string>(''); // 기본 이미지 설정
  const { user, dog } = useSelector((state: RootState) => state.user);

  const [dogName, setDogName] = useState('');
  const [dogImg, setDogImg] = useState<string>('');
  const [birth, setBirth] = useState('2023/01/01');
  const [gender, setGender] = useState('male');
  const [dogType, setDogType] = useState('');
  const [personality, setPersonality] = useState('active');
  const [note, setNote] = useState('');

  const handleAddDog = async () => {
    // console.log(user.userId);
    // console.log(user._id);
    // console.log(birth);

    if (gender === 'male' || gender === 'Male') {
      setGender('Male');
    } else if (gender === 'female' || gender === 'Female') {
      setGender('Female');
    } else if (gender === 'other' || gender === 'Other') {
      setGender('Male');
    }

    if (personality === 'active' || gender === 'Active') {
      setGender('활발');
    } else if (gender === 'sensitive' || gender === 'Sensitive') {
      setGender('예민');
    } else if (gender === 'calm' || gender === 'Calm') {
      setGender('얌전');
    }

    const req = await fetch('/api/users/myDog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user.userId,
        dogName: dogName,
        // "dogImg":user._id,
        dogImg: dogImg,
        birth: birth,
        gender: gender,
        dogType: dogType,
        personality: personality,
        note: note,
      }),
      credentials: 'include',
    });
    const res = await req.json();
    console.log(`=====등록하기 res=====`);
    console.log(res);
    console.log(`=====등록하기 res=====`);

    if (req.status === 201) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/users/myInfo', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });

          if (response.status === 200) {
            const data = await response.json();
            dispatch(setDog(data.userDogs));
            console.log(data.userDogs);
          } else {
            console.log('dog추가 오류');
          }
        } catch (error) {
          console.error('dog데이터 조회 오류:', error);
        }
      };

      fetchData();
    }

    setDogName('');
    setImagePath('');
    setBirth('2023/01/01');
    setGender('male');
    setDogType('');
    setPersonality('active');
    setNote('');
    setClicked(!clicked);
    setAddCard(true);
  };

  const handleCancle = () => {
    setOpenErrorAlert(true);
    // setClicked(!clicked)
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e: ProgressEvent<FileReader>) {
        const image = e.target?.result as string;
        setImagePath(image);
        console.log(imagePath);
      };
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append('image', file);

      await fetch('/api/upload/image', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => setDogImg(data[0]))
        .catch((error) => {
          // 에러 처리
          console.error('이미지 업로드 에러:', error);
        });
    }
  };

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  useEffect(() => {
    !imagePath || !dogName || !dogType ? null : setAddCard(false);
  }, [imagePath, dogName, dogType]);

  useEffect(() => {
    setDogName('');
    setDogImg('');
    setBirth('2023/01/01');
    setGender('male');
    setDogType('');
    setPersonality('active');
    setNote('');
    setOpenErrorAlert(false);
  }, [clicked]);

  return (
    <>
      {clicked ? (
        <Link to={'/mypage'} />
      ) : (
        <TotalFrame>
          <div className="image">
            <input type="file" accept="image/*" onChange={(event) => handleImageUpload(event)} style={{ display: 'none' }} ref={inputRef} id="imageInput" />
            <img
              src={imagePath || defaultImage} // 기본 이미지 설정 (선택된 이미지가 없을 때 표시될 이미지)
              alt="Selected"
              className="selectedImage pointer"
              onClick={handleImageClick}
            />
          </div>
          <InfoFrame>
            <div className="name">
              <div>
                <img src="/svg/dog_default.svg" alt="강아지아이콘" style={{ marginRight: '2.5px' }} />
              </div>
              <div>
                <TextField
                  variant="standard"
                  placeholder="이름을 작성해주세요"
                  defaultValue={dogName}
                  onChange={(e) => setDogName(e.target.value)}
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '4%',
                      fontSize: '15px',
                      width: '200px',
                    },
                  }}
                />
              </div>
            </div>
            <div className="species">
              <div>견종</div>
              <div>
                <TextField
                  variant="standard"
                  placeholder="견종을 작성해주세요"
                  defaultValue={dogType}
                  onChange={(e) => setDogType(e.target.value)}
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '4%',
                      fontSize: '15px',
                      width: '200px',
                    },
                  }}
                  size="small"
                />
              </div>
            </div>
            <div className="age">
              <div>나이</div>
              <div>
                {/* <TextField placeholder="반려견의 나이를 작성해주세요" 
                            
                            sx={{
                                '& .MuiInputBase-input': {
                                padding: "5% 5% 5% 5%",
                                fontSize: "15px",
                                width:"210px"
                                },
                            }}/> */}

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    {/* <DemoItem label="나이를 입력해주세요"> */}
                    <DatePicker
                      onChange={(date) => setBirth(date ? date.format('YYYY-MM-DD') : '')}
                      value={dayjs('01/01/2023')}
                      sx={{
                        width: '200px',
                        '& .MuiInputBase-input': {
                          padding: '4%',
                        },
                      }}
                    />
                    {/* </DemoItem> */}
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            </div>
            <div className="gender">
              <div>성별</div>
              <div>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue={gender}
                    defaultValue="male"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="male" control={<Radio />} label="남자" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                    <FormControlLabel value="female" control={<Radio />} label="여자" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                    <FormControlLabel value="other" control={<Radio />} label="중성" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="character">
              <div>성격</div>
              <div>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    // defaultValue={personality}
                    defaultValue="active"
                    value={personality}
                    onChange={(e) => setPersonality(e.target.value)}
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="active" control={<Radio />} label="활발" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                    <FormControlLabel value="calm" control={<Radio />} label="얌전" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                    <FormControlLabel value="sensitive" control={<Radio />} label="예민" sx={{ '& .MuiSvgIcon-root': { fontSize: 10 } }} />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div className="note">
              <div>특이사항</div>
              <div>
                {/* 해당 부분 글이 길어지면 해당 부분에만 스크롤 생기게끔 해야함. 전체적인 틀이 무너지면 안됨. */}
                <TextField
                  placeholder={'특이사항을 작성해주세요.최대 45자까지 작성 가능합니다.'}
                  InputProps={{ inputProps: { maxLength: 45 } }}
                  defaultValue={note}
                  onChange={(e) => setNote(e.target.value)}
                  multiline
                  rows={2}
                  sx={{
                    overflowY: 'auto',
                    '.MuiInputBase-input': {
                      width: '220px',
                      padding: '0',
                      fontSize: '12px',
                    },
                  }}
                />
              </div>
            </div>
            <div className="button">
              <Button variant="contained" color="mainB" size="small" disabled={addCard} onClick={() => handleAddDog()}>
                등록하기
              </Button>
              <Button variant="contained" color="mainB" size="small" onClick={() => handleCancle()}>
                취소하기
              </Button>
              <AlertError title="작성중이던 내용은 저장되지 않습니다." open={openErrorAlert} onClose={() => setOpenErrorAlert(false)} onClick={() => setClicked(!clicked)} />
            </div>
          </InfoFrame>
        </TotalFrame>
      )}
      {clicked && <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>}
      {/* {addCard && <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>} */}
    </>
  );
};

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: black dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  font-size: 200px;
  color: gray;
  background-color: #ffffff;

  margin: 3% auto;
`;

const TotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: #fcd11e dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  padding: 20px 10px;
  box-sizing: border-box;

  margin: 3% 1%;

  .image {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        filter: blur(1.5px);
      }
    }
    .selectedImage {
      cursor: pointer;
    }

    .icon {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
`;

const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  div.name {
    display: flex;
    margin-top: 1%;
    align-items: center;

    div img {
      display: flex;
      justify-self: center;
      align-self: center;
      width: 41px;
      height: 48px;
      object-fit: contain;
      padding-right: 12px;
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
    width: 100%;
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
    justify-content: end;

    margin: 3% 20px 0 0;
    button {
      margin-left: 10px;
    }
  }
`;
