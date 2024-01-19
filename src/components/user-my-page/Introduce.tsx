import { styled } from 'styled-components';
import { DogButton } from '../my-page/DogButton';
import { useEffect,  } from 'react';
import { AppDispatch, RootState, setMypageDog } from 'store/index';
import { useDispatch, useSelector } from 'react-redux';

export const Introduce = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { mypageUser } = useSelector((state: RootState) => state.mypageUser);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/api/users/myInfo', {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       });

  //       if (response.status === 200) {
  //         const data = await response.json();
  //         dispatch(setMypageDog(data.userDogs));
  //       } else {
  //         console.log('dog추가 오류');
  //       }
  //     } catch (error) {
  //       console.error('dog데이터 조회 오류:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Writing>
        <div>{mypageUser.introduce === "" ? `${mypageUser.nickname}님의 소개글이 없습니다.` : mypageUser.introduce}</div>
      </Writing>
      <Dog>
        <p>나의 반려견을 소개합니다!</p>
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

