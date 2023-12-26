import { styled } from "styled-components";
import React, { useEffect, useState } from "react";
// import { Profile } from "../components/Profile/Profile";
import { ProfileInfo } from "../components/my-page/ProfileInfo";
import { Navbar } from "../components/my-page/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "store/index";
import { Forbidden } from 'common/state/Forbidden';

export function MyPage() {

  const { user } = useSelector((state: RootState) => state.user);
  const [isUser, setIsUser] = useState<boolean>(true);

  useEffect(() => {
    if (user._id === "") {
      // console.log('유저가없어요');
      setIsUser(false);
    } else {
      // console.log('유저가있어요:', user);
      setIsUser(true);
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
