import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { DogButton } from './DogButton';
import { useEffect } from 'react';
import { AppDispatch, setDog } from 'store/index';
import { useDispatch } from 'react-redux';

export const Introduce = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/myInfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        // 데이터가 undefined면 로그인 안한거니까 할 필요 없음
        // 응답의 상태를 체크해야함 reponse.ok
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
  }, []);

  const handleModifyIntroduce = () => {
    alert("소개글 수정 테스트");
  }

  return (
    <>
      <Writing>
        <div>소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 
          소개글 소개글 소개글소개글 소개글 소개글 소개글 소개글 소개글 소개글 소개글 750px로 width고정하였음          
        </div>
        <div>
          <Button variant="contained" color="mainB" sx={{}} onClick={handleModifyIntroduce}>소개글 수정</Button>
        </div>
      </Writing>
      <Dog>
        <p>나의 반려견</p>
        <Add>
          <DogButton />
        </Add>
      </Dog>
    </>
  );
};

const Writing = styled.div`
  display: flex;
  /* 개행문자 인식을 위한 코드 */
  white-space: pre-wrap;
  justify-content: space-between;
  margin: 3% 5% 0 3%;
  

  div:nth-child(1) {
    align-self: center;
    flex-wrap: wrap;
    width: 750px;
  }

  div:nth-child(2) {
    align-self: center;
  }
`;

const Dog = styled.div`
  p:nth-child(1) {
    font-size: 20px;
    font-weight: bold;
    margin: 50px 10px 20px;
  }
`;

const Add = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

// border: black solid 1px;
