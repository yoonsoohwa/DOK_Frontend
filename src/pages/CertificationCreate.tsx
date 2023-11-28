import React, { useState } from 'react';
import { styled } from 'styled-components';
import { PostCreateFormLayout } from '../components/common/create-page/PostCreateFormLayout';
import { AddPhotoAlternateOutlined, ChatOutlined, LocationOn, Pets } from '@mui/icons-material';
import { FormLabel, TextField } from '@mui/material';
import { PostCreateGroup } from 'common/create-page/PostCreateGroup';

export function CertificationCreatePage() {
  // 인증 글 작성은 리덕스 사용 X
  // -> useState 사용하기(File 때문에 A non-serializable value was detected in the state 에러 날 수 있음)

  const [address, setAddress] = useState('');
  const [images, setImages] = useState<File[] | null>();
  const [imagesURL, setImagesURL] = useState<string[] | null>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) {
      setImages(null);
      setImagesURL(null);
      return;
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
        <PostCreateFormLayout onSubmit={() => {}} onReset={() => {}} title="인증 등록하기">
          <PostCreateGroup title="Link">
            <Contents>
              <Pets className="icon" />
              <span>이뽀삐 | 2023-11-19 | 2:00~3:00</span>
            </Contents>
          </PostCreateGroup>

          <PostCreateGroup title="Contents">
            <Contents>
              <FormLabel component="legend">
                <LocationOn className="icon" />
                산책 장소
              </FormLabel>
              <TextField id="outlined-multiline-flexible" size="small" value={address} fullWidth />
            </Contents>

            <Contents>
              <FormLabel component="legend">
                <ChatOutlined className="icon" />
                인증 내용
              </FormLabel>
              <TextField id="outlined-multiline-flexible" multiline rows={4} fullWidth />
            </Contents>

            <Contents className="file-input ">
              <FormLabel component="legend">
                <AddPhotoAlternateOutlined className="icon" />
                사진
              </FormLabel>
              <div>
                <label htmlFor="photo" className=" MuiInputBase-sizeSmall">
                  <span>{images ? images[0].name + (images.length > 1 ? ` 외 ${images.length - 1}개` : '') : ''}</span>
                  <AddPhotoAlternateOutlined className="pointer" />
                </label>
                <input
                  id="photo"
                  type="file"
                  onChange={(e) => {
                    if (!e.target.files?.length) return;
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
          </PostCreateGroup>
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
    max-width: 800px;
    margin: 0 auto;
  }

  .half {
    width: 48%;
  }

  .MuiFormLabel-root {
    margin-bottom: 4px;
    font-size: small;
  }

  .preview {
    height: 200px;
    margin: 20px 0 40px;
    overflow: auto;

    img {
      height: calc(100% - 4px);
      margin: 0 20px 4px 0;
    }
  }
`;

const Contents = styled.div`
  padding-bottom: 36px;

  legend {
    display: flex;
  }

  .icon {
    color: #959595;
    width: 18px;
    height: auto;
    margin-right: 4px;
  }

  &.file-input {
    margin-bottom: 40px;
    display: block;

    > div {
      display: flex;
      align-items: flex-start;
    }

    label {
      min-width: 300px;
      border: solid 1px rgba(0, 0, 0, 0.23);
      border-radius: 4px;
      padding: 8.5px 14px;
      justify-content: space-between;

      font-size: 1rem;
      line-height: 1.4375em;
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;

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

// const Contents = styled.div`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 40px;

//   &.file-input {
//     margin-bottom: 40px;
//     display: block;

//     > div {
//       display: flex;
//       align-items: flex-start;
//     }

//     label {
//       width: 300px;
//       height: 40px;
//       border: solid 1px rgba(0, 0, 0, 0.23);
//       border-radius: 4px;
//       padding: 8.5px 14px;
//       display: flex;
//       justify-content: space-between;

//       span {
//         overflow: hidden;
//         text-overflow: ellipsis;
//         margin-right: 4px;
//       }
//     }

//     input#photo {
//       display: none;
//     }
//   }
// `;
