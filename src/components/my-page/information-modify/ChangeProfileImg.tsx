import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setSelectedImg } from 'store/index';
import styled from 'styled-components';
import userImage from '/svg/user_image1.svg';
import ModeIcon from '@mui/icons-material/Mode';

export const ChangeProfileImg = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.user);
  const [imagePath, setImagePath] = useState<string>(user.userImg || userImage);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(setSelectedImg(user.userImg || ''));
  }, []);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
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
        .then((data) => {
          dispatch(setSelectedImg(data[0]));
        })
        .catch((error) => {
          // 에러 처리
          console.error('이미지 업로드 에러:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={(event) => handleImageUpload(event)} style={{ display: 'none' }} ref={inputRef} id="imageInput" />
      <ImgContainer className="pointer" onClick={handleImageClick} id="selectedImage">
        <img src={imagePath} className="user-img" />
        <OpacityContainer></OpacityContainer>
        <EditIcon>
          <ModeIcon sx={{ fontSize: '35px', color: 'white' }} />
        </EditIcon>
      </ImgContainer>
    </div>
  );
};

const ImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const EditIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const OpacityContainer = styled.div`
  background-color: gray;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
