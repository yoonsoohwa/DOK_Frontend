import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  box-sizing: border-box;

  > img {
    width: 8rem;
    height: 8rem;
  }

  @media screen and (max-width: 425px){
    > img {
        display: none;
    }
  }
`;

export const MessageContainer = styled.div`
  height: fit-content;
  padding: 0.9rem 5rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 10px;
  background-color: #b4e1ff;
`;
