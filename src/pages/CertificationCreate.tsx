import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { PostCreateFormLayout } from "../components/Common/PostCreateForm";
import { AddAPhoto, AddPhotoAlternate, AddPhotoAlternateOutlined, ChatOutlined, LocationOn, Pets } from "@mui/icons-material";
import { TextField } from "@mui/material";

export function CertificationCreatePage() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [address, setAddress] = useState("ㅋㅋㅋ");
  const [images, setImages] = useState<File[] | null>();
  const [imagesURL, setImagesURL] = useState<string[] | null>();
  const [errorImage, setErrorImage] = useState("사진을 선택해주세요.");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) {
      setImages(null);
      setImagesURL(null);
      return setErrorImage("사진을 선택해주세요.");
    }

    const arrayImg = Array.from(e.target.files);
    const newImagesURL = arrayImg.map((file) => URL.createObjectURL(file));
    imagesURL?.map((url) => URL.revokeObjectURL(url));
    /* 동일한 파일 객체를 이용하여 URL을 생성한다고 해도 새로운 URL을 생성한다.
    사용하지 않는 이미지 URL의 경우에는 반드시 revokeObjectURL을 사용하여 메모리에서 해제하자.
    (물론 브라우저를 종료하면 생성한 URL도 함께 메모리에서 해제된다.) */
    setImages(arrayImg);
    setImagesURL(newImagesURL);
  };

  return (
    <CertifiCreate>
      <div className="body">
        <PostCreateFormLayout title="인증 등록하기">
          <Contents>
            <Pets className="icon" />
            <h3>이뽀삐 | 2023-11-19 | 2:00~3:00</h3>
          </Contents>

          <Contents className="file-input ">
            <div>
              <AddPhotoAlternateOutlined className="icon" />
              <div className="title">사진</div>
              <label htmlFor="photo" className="css-1si3apa-MuiInputBase-root-MuiOutlinedInput-root">
                <span>{images ? images[0].name + (images.length > 1 && ` 외 ${images.length - 1}개`) : ""}</span>
                <AddPhotoAlternateOutlined className="pointer" />
              </label>
              <input
                id="photo"
                type="file"
                onChange={(e) => {
                  setImages(e.target.files ? Array.from(e.target.files) : []);
                  handleImageChange(e);
                }}
                multiple
              />
            </div>
            {imagesURL && (
              <div className="preview custom-scrollbar">
                {imagesURL.map((url) => (
                  <img src={url} />
                ))}
              </div>
            )}
          </Contents>

          <Contents>
            <LocationOn className="icon" />
            <div className="title">만남 장소</div>
            <TextField id="outlined-multiline-flexible" size="small" value={address} sx={{ width: "80%" }} />
          </Contents>

          <Contents>
            <ChatOutlined className="icon" />
            <div className="title">인증 내용</div>
            <TextField id="outlined-multiline-flexible" label="Multiline" multiline rows={4} sx={{ width: "80%" }} />
          </Contents>
        </PostCreateFormLayout>
      </div>
    </CertifiCreate>
  );
}

const CertifiCreate = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: ${({ theme }) => theme.main4};

  .body {
    width: 90%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .preview {
    height: 320px;
    margin: 20px 0 40px;
    overflow: auto;

    img {
      height: 100%;
      margin-right: 20px;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  .icon {
    color: #3e3e3e;
    width: 48px;
    height: 48px;
  }

  .title {
    width: 100px;
    font-size: 20px;
    margin: 4px 10px;
  }

  > h3 {
    font-size: 20px;
    margin: 8px 12px;
  }

  &.file-input {
    margin-bottom: 40px;
    display: block;

    > div {
      display: flex;
      align-items: flex-start;
    }

    label {
      width: 300px;
      height: 40px;
      border: solid 1px rgba(0, 0, 0, 0.23);
      border-radius: 4px;
      padding: 8.5px 14px;
      display: flex;
      justify-content: space-between;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 4px;
      }
    }

    input#photo {
      display: none;
    }
  }
`;
