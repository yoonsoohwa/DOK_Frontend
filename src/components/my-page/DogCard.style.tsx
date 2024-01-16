import styled from "styled-components";

export const TotalFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: #fcd11e dashed 3px;
  border-radius: 10px;

  width: 30%;
  height: 620px;
  padding: 20px;
  box-sizing: border-box;

  margin: 3% 1%;

  > img {
    width: 100%;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 6px;
  }
`;

export const InfoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 4px;
  box-sizing: border-box;
  flex-wrap: wrap;

  > div {
    display: flex;
    margin-top: 8px;

    div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      color: #8d8d8d;
    }
    div:nth-child(2) {
      margin-left: 10px;
      span {
        color: #9f9f9f;
      }
    }
  }

  .name {
    display: flex;
    margin-top: 1%;
    align-items: center;

    div img {
      display: flex;
      justify-self: center;
      align-self: center;
      width: 48px;
      height: 48px;
      object-fit: contain;
    }

    div:nth-child(2) {
      margin-left: 2%;
    }
  }

  .note {
    flex-direction: column;
    height: 100%;
    flex: 1 1 0;

    div:nth-child(1) {
      width: 80px;
    }
    div:nth-child(2) {
      margin: 8px 0 0 10px;
      box-sizing: border-box;
      padding: 8px;
      border-radius: 4px;
      background-color: #f7f7f7;
      height: 100%;
      max-height: 60px;
      overflow-y: auto;
      font-size: 14px;
    }
  }

  div.button {
    display: flex;
    justify-content: space-around;

    margin-top: 3%;
  }
`;