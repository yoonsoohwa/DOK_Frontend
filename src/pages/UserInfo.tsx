
import { useEffect, useState } from "react";
import { MypageProfileInfo } from "../components/my-page/MypageProfileInfo";
import { Navbar } from "../components/user-my-page/Navbar";
import { useDispatch } from "react-redux";
import { AppDispatch, setIsLoading, setMypageDog, setMypageUser } from "store/index";
import { Forbidden } from 'common/state/Forbidden';
import { useParams } from "react-router-dom";
import { initUserType } from "../types";
import mypageUser from "store/mypageUserSlice";

// 유저 마이페이지
export function UserInfo() {

  const [isUser, setIsUser] = useState<boolean>(true);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    
    if (`${id}` === "") {
      setIsUser(false);
    } else {
      const fetchData = async () => {
        try {
          // 여기서 API 테스트 해야함
          // http://localhost:3000/api/users/userInfo/:_id
          // 6568542b4617a781992641d9
          // const response = await fetch(`/api/users/userInfo/:${id}`, {
            const response = await fetch(`/api/users/userInfo/6568542b4617a781992641d9`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
          });
  
          if (response.status === 200) {
            const data = await response.json();
            // 여기 디스패치에서 api 만들어준 값들 매칭시켜서 넣어주면 될듯?
            // dispatch(setMypageUser(data.user));
            console.log(`디스패치 전`);
            dispatch(setMypageUser(data.user));
            dispatch(setMypageDog(data.userDogs));
            // setIsUser(true);
            console.log(`디스패치 후`);
            console.log(`${JSON.stringify(data)}`);
            
          } else {
            dispatch(setMypageUser(initUserType));
          }
          dispatch(setIsLoading(false));
        } catch (error) {
          console.error('유저 마이페이지 조회 오류:', error);
        }
      };
  
      fetchData();
    }
  }, [id]);

  return (
    <>
      { isUser ? <>
        <MypageProfileInfo />
        <Navbar />
      </>
      : <Forbidden />
      }
    </>   
  );
}
