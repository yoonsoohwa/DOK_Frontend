import { styled } from "styled-components";
import React from "react";
// import { Profile } from "../components/Profile/Profile";
import { ProfileInfo } from "../components/MyPage/ProfileInfo";
import { Navbar } from "../components/MyPage/Navbar";

export function MyPage() {
  return (<div>
    <ProfileInfo />
    <Navbar />
  </div>    
  );
}
