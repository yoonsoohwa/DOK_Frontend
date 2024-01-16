
import { useEffect, useState } from "react";
import { ProfileInfo } from "../components/my-page/ProfileInfo";
import { Navbar } from "../components/user-my-page/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setDog, setIsLoading, setMypageUser, setUser } from "store/index";
import { Forbidden } from 'common/state/Forbidden';
import { useParams } from "react-router-dom";
import { initUserType } from "../types";

// 유저 마이페이지
export function UserInfo() {

  const { user } = useSelector((state: RootState) => state.user);
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
          const response = await fetch(`/api/users?userId=${id}`, {
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
            dispatch(setUser(data.user));
            dispatch(setDog(data.userDogs));
            setIsUser(true);
          } else {
            dispatch(setUser(initUserType));
          }
          dispatch(setIsLoading(false));
        } catch (error) {
          console.error('유저 마이페이지 조회 오류:', error);
        }
      };
  
      fetchData();
    }
  }, [user]);

  return (
    <>
      { isUser ? <>
        <ProfileInfo />
        <Navbar />
      </>
      : <Forbidden />
      }
    </>   
  );
}
