import { styled } from "styled-components";
import React from "react";
// import { Profile } from "../components/Profile/Profile";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { ProfileNavBar } from "../components/Profile/ProfileNavbar";

export function ProfileIntroduction() {
  return (<div>
    <ProfileInfo />
    <ProfileNavBar />
  </div>    
  );
}
