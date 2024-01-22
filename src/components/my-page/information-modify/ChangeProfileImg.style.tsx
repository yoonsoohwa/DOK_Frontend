import styled from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OpacityContainer = styled.div`
  background-color: gray;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
