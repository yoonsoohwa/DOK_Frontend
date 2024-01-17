import styled from 'styled-components';

const top = 380;
const bottom = 280;

export const Section = styled.div`
  position: relative; // sticky 가 relative를 만나야 끝남. 건드리지 말 것

  width: 100%;
  height: ${top + bottom}px;
  display: flex;
  justify-content: center;
  align-items: end;
  overflow: hidden;

  > img {
    position: absolute;
    width: 100%;
    top: 280px;
    z-index: -1;
  }
`;

export const InnerBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 80px 0 50px;
`;

export const Title = styled.div`
  width: 300px;
  text-align: center;
  align-self: flex-start;
  margin: 0 20px;

  h2 {
    font-size: 40px;
    margin: 0;
    margin-top: 110px;
    color: ${({ theme }) => theme.sub};
    transition: all 300ms;

    &:hover {
      transform: translateY(-4px);
    }
  }

  .send-text {
    font-size: 20px;
    font-weight: 500;
    margin: 14px 0;
    color: #fff;
    transition: all 300ms;

    &:hover {
      transform: translateY(-4px);
    }
  }

  @media screen and (max-width: 1156px) {
    .send-text {
      display: none;
    }

    h2 {
      margin-bottom: 40px;
    }
  }
`;

export const Contents = styled.div`
  width: 60%;
  min-width: 800px;
  display: flex;
  justify-content: space-around;

  .content {
    width: 250px;
    height: 365px;
    text-align: center;
    line-height: 326px;
    background-color: #f0f0f0;
    border: 1px solid #000;
  }
`;

export const BackgroundBox = styled.div`
  display: none;
  width: 100%;
  height: 10vw;
  background-color: #9fc1e4b7;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
