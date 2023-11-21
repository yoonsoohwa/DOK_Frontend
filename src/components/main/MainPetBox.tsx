import React from "react";
import { styled } from "styled-components";

interface type {
  petData: string;
  className: string;
}

export function MainPetBox({ petData, className }: type) {
  return (
    <Pet className={className}>
      <img className="pet-img" src="/temp/뽀삐.png" />
      <div className="gender-name">
        <img src="/svg/gender_female.svg" />
        <span>이뽀삐</span>
      </div>
    </Pet>
  );
}

const Pet = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;

  &.left {
    float: left;
  }

  &.right {
    float: right;
  }

  &:nth-child(2) {
    margin-top: 360px;
  }

  .gender-name {
    display: flex;
    align-items: center;
  }

  span {
    font-family: "Gaegu";
    font-weight: 900;
    font-size: 2em;
    color: #3e3e3e;
    height: 30px;
  }

  .pet-img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
  }
`;
