import styled from 'styled-components';

export const Section = styled.div`
  margin: 0 auto;
  .color-main {
    color: ${({ theme }) => theme.main};
  }
  .color-sub {
    color: ${({ theme }) => theme.sub};
  }
`;

export const MainTopImage = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;
  position: absolute;
  z-index: -1;

  img {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: block;
  }
`;

export const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
  padding: 80px 80px;
  transition: all 200ms;
  box-sizing: border-box;

  img {
    align-self: center;
  }
`;

export const LeftBox = styled.div`
  width: 100%;
  max-width: 700px;

  > div:nth-child(1) {
    color: #8e8e8e;
    font-weight: 700;
    font-size: 20px;

    margin-top: 50px;
  }

  > div:nth-child(2) {
    font-weight: 800;
    font-size: 44px;
    letter-spacing: 0.02em;

    margin-top: 10px;
  }

  > div:nth-child(3) {
    display: flex;
    align-items: end;
    font-family: 'Gaegu';

    margin-top: 60px;

    > div:nth-child(1) {
      height: 120px;
      font-weight: 700;
      font-size: 128px;
      letter-spacing: -0.1em;
      margin-right: 10px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    > div:nth-child(2) {
      width: 130px;
      background: linear-gradient(to top, ${({ theme }) => theme.main3} 50%, transparent 50%);
      font-weight: 700;
      font-size: 17px;
      letter-spacing: 0px;

      box-sizing: border-box;
      padding: 0 5px;
    }
  }

  > div:nth-child(4) {
    display: flex;

    margin-top: 30px;

    button {
      width: 335px;
      height: 74px;
      margin: 0 10px;

      background: #fffefa;
      box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 20px;

      font-family: 'Gaegu';
      font-weight: 700;
      font-size: 24px;
      letter-spacing: -0.02em;

      color: #3e3e3e;

      .pet {
        color: #8e8e8e;
        margin: 0 8px 4px 0;
      }

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .link:nth-child(1):hover {
      * {
        color: ${({ theme }) => theme.main};
      }
    }

    .link:nth-child(2) button {
      background-color: #fafcff;
    }

    .link:nth-child(2):hover {
      * {
        color: ${({ theme }) => theme.sub3};
      }
    }
  }
`;
