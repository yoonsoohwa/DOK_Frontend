import { styled } from "styled-components"
import Button from '@mui/material/Button';
import {TextField, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { Link } from "react-router-dom";

export const DogDetail = () => {
    const [clicked, setClicked] = useState(false);
    
    const inputRef = useRef<HTMLInputElement>(null);;

    const [imagePath, setImagePath] = useState<string>('/dok_logo.png'); // 기본 이미지 설정
    const { user, dog } = useSelector((state: RootState) => state.user);

    
    const [dogName, setDogName] = useState("");
    const [dogImg, setDogImg] = useState("");
    const [birth, setBirth] = useState("111");
    const [gender, setGender] = useState("male");
    const [dogType, setDogType] = useState("");
    const [personality, setPersonality] = useState("active");
    const [note, setNote] = useState("");

    const handleAddDog = async () => {

        console.log(user.userId);
        console.log(user._id);

        const req = await fetch('/api/users/myDog',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user": user.userId,
                "dogName": dogName,
                "dogImg":user._id,
                "birth":"01/04/2024",
                "gender":gender,
                "dogType":dogType,
                "personality":personality,
                "note" : note,
            }),
            credentials: 'include',
        });
        const res = req.json;
        console.log(res);
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>) {
            const image = e.target?.result as string;
            setImagePath(image);
            console.log(imagePath);
        };
        reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        if (inputRef.current) {
          inputRef.current.click();
        }
      };

    return (
        <>
            {clicked ? <Link to={"/mypage"} />
            : <TotalFrame>
                <div className="image">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(event) => handleImageUpload(event)}
                        style={{ display: 'none' }}
                        ref={inputRef}
                        id="imageInput"
                    />
                    <img
                        src={imagePath} // 기본 이미지 설정 (선택된 이미지가 없을 때 표시될 이미지)
                        alt="Selected"
                        id="selectedImage"
                        onClick={handleImageClick}
                        style={{ cursor: 'pointer' }} // 마우스 커서가 포인터로 변경되도록 스타일 지정
                    />
                </div>
                <InfoFrame>
                    <div className="name">
                        <div>
                            <img src="/svg/dog_default.svg" alt="강아지아이콘" style={{marginRight: "2.5px"}} />
                        </div>
                        <div>
                            <TextField placeholder="반려견의 이름을 작성해주세요" 
                            defaultValue={dogName}
                            onChange={(e) => setDogName(e.target.value)}
                            sx={{
                                '& .MuiInputBase-input': {                                
                                padding: "5% 5% 5% 5%",
                                fontSize: "15px",
                                width:"210px"
                                },
                            }}/>
                        </div>
                    </div>
                    <div className="species">
                        <div>
                            견종
                        </div>
                        <div>
                            <TextField placeholder="반려견의 견종을 작성해주세요" 
                            defaultValue={dogType}
                            onChange={(e) => setDogType(e.target.value)}
                            sx={{
                                '& .MuiInputBase-input': {
                                padding: "5% 5% 5% 5%",
                                fontSize: "15px",
                                width:"210px"
                                },
                            }}/>
                        </div>
                    </div>
                    <div className="age">
                        <div>
                            나이
                        </div>
                        <div>
                            <TextField placeholder="반려견의 나이를 작성해주세요" 
                            
                            sx={{
                                '& .MuiInputBase-input': {
                                padding: "5% 5% 5% 5%",
                                fontSize: "15px",
                                width:"210px"
                                },
                            }}/>
                        </div>
                    </div>
                    <div className="gender">
                        <div>
                            성별
                        </div>
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
                                    <FormControlLabel value="male" control={<Radio />} label="남자" sx={{'& .MuiSvgIcon-root': {fontSize: 12}}} />
                                    <FormControlLabel value="female" control={<Radio />} label="여자"  sx={{'& .MuiSvgIcon-root': {fontSize: 12}}}/>
                                    <FormControlLabel value="other" control={<Radio />} label="중성" sx={{'& .MuiSvgIcon-root': {fontSize: 12}}}/>
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="character">
                        <div>
                            성격
                        </div>
                        <div>
                            <FormControl>                            
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    // defaultValue={personality}
                                    defaultValue="active"
                                    value={personality}
                                    onChange={(e)=> setPersonality(e.target.value)}
                                    name="radio-buttons-group"                                    
                                >
                                    <FormControlLabel value="active" control={<Radio />} label="활발" sx={{'& .MuiSvgIcon-root': {fontSize: 12}}} />
                                    <FormControlLabel value="calm" control={<Radio />} label="얌전"  sx={{'& .MuiSvgIcon-root': {fontSize: 12}}}/>
                                    <FormControlLabel value="sensitive" control={<Radio />} label="예민" sx={{'& .MuiSvgIcon-root': {fontSize: 12}}}/>                                    
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div className="note">
                        <div>
                            특이사항
                        </div>
                        <div>
                            {/* 해당 부분 글이 길어지면 해당 부분에만 스크롤 생기게끔 해야함. 전체적인 틀이 무너지면 안됨. */}
                            <TextField placeholder="특이사항을 작성해주세요" 
                            defaultValue={note}
                            onChange={(e) => setNote(e.target.value)}
                            multiline rows={2}
                            sx={{
                                overflowY:'auto',       
                                '& .MuiInputBase-input': {                                    
                                width: "240px",
                                padding: "0% 0% 0% 0%",
                                fontSize: "12px"
                                },
                            }}/>
                        </div>
                    </div>
                    <div className="button">
                        <Button variant="contained" color="mainB" onClick={() => handleAddDog()}>등록하기</Button>
                        <Button variant="contained" color="mainB" onClick={() => setClicked(!clicked)}>취소하기</Button>
                    </div>
                </InfoFrame>
            </TotalFrame>
            }
            {clicked && <AddButton onClick={() => setClicked(!clicked)}>+</AddButton>}
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

const TotalFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    

    border: #FCD11E dashed 3px;
    border-radius: 10px;

    width: 40%;
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
`

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

    div.button{
        display: flex;
        justify-content: space-around;

        margin-top: 3%;
    }
`