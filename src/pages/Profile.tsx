
import { useEffect, useState } from "react";
import { MypageProfileInfo } from "../components/my-page/MypageProfileInfo";
import { Navbar } from "../components/user-my-page/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setIsLoading, setMypageDog, setMypageRating, setMypageUser } from "store/index";
import { Forbidden } from 'common/state/Forbidden';
import { useLocation, useParams } from "react-router-dom";

// 유저 마이페이지
export function Profile() {

  const [isUser, setIsUser] = useState<boolean>(true);
  const { mypageRating } = useSelector((state: RootState) => state.mypageUser);
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {

    // 로그인한 회원인지 1차 체크
    user._id === "" ? setIsUser(false) : setIsUser(true);

    // 로그인 되었더라도 url로 유저id가 없는지 체크
    if (`${id}` === "") {
      setIsUser(false);
    } else {
      const fetchData = async () => {
        try {
          // 여기서 API 테스트 해야함
          // http://localhost:3000/api/users/userInfo/:_id
          // 6568542b4617a781992641d9
          // const response = await fetch(`/api/users/userInfo/:${id}`, {
            // const response = await fetch(`/api/users/userInfo/6568542b4617a781992641d9`, {
            const response = await fetch(`/api/users/userInfo/${id}`, {
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
            dispatch(setMypageUser(data.user));
            dispatch(setMypageDog(data.userDogs));
            dispatch(setMypageRating(data.rating));
            
            // setIsUser(true);
            // console.log(`${JSON.stringify(data)}`);
            
          } else {
            // console.error('유저 마이페이지 조회 오류');  
          }
          dispatch(setIsLoading(false));
        } catch (error) {
          // console.error('유저 마이페이지 조회 오류:', error);
        }
      };
  
      fetchData();
    }
  }, [id,user._id]);

  return (
    // <>
    //   { isUser ? <>
    //     <MypageProfileInfo />
    //     <Navbar />
    //   </>
    //   : <Forbidden />
    //   }
    // </>
    <>
      { isUser &&  mypageRating !== undefined ? <>
        <MypageProfileInfo />
        <Navbar />
      </>
      : <Forbidden />
      }
    </>
  );
}
