import styled from "styled-components";

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: black dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  font-size: 200px;
  color: gray;
  background-color: #ffffff;

  margin: 3% auto;
`;

export const TotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: #fcd11e dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  padding: 20px 10px;
  box-sizing: border-box;

  margin: 3% 1%;

  .image {
    width: 200px;
    height: 200px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      &:hover {
        filter: blur(1.5px);
      }
    }
    .selectedImage {
      cursor: pointer;
    }

    .icon {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
`;

export const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  div.name {
    display: flex;
    margin-top: 1%;
    align-items: center;

    div img {
      display: flex;
      justify-self: center;
      align-self: center;
      width: 41px;
      height: 48px;
      object-fit: contain;
      padding-right: 12px;
    }
  }

  div.species {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.age {
    display: flex;
    margin-top: 3%;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.gender {
    display: flex;
    margin-top: 3%;
    width: 100%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.character {
    display: flex;
    margin-top: 3%;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
    }
    div:nth-child(2) {
      margin-left: 3%;
    }
  }

  div.note {
    display: flex;
    margin-top: 3%;
    flex-direction: column;
    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 78px;
    }
    div:nth-child(2) {
      margin: 2% 0 0 4%;
    }
  }

  div.button {
    display: flex;
    justify-content: end;

    margin: 3% 20px 0 0;
    button {
      margin-left: 10px;
    }
  }
`;
