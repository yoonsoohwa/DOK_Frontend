import { styled } from "styled-components";
import React from "react";
// import { Profile } from "../components/Profile/Profile";
import { ProfileInfo } from "../components/my-page/ProfileInfo";
import { Navbar } from "../components/my-page/Navbar";

export function MyPage() {
  return (
    <div>
      <ProfileInfo />
      <Navbar />
    </div>
  );
}
