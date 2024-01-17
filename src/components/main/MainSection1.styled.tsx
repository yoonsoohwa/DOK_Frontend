import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  height: 172vw;
  background-color: ${({ theme }) => theme.main3};
`;

export const PetsScrollBox = styled.div`
  width: 65%;
  height: 100vh;
  box-sizing: border-box;
  padding: 100px 0 0 50px;
  position: relative;
`;

export const TitleBox = styled.div`
  width: 35%;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: end;
  padding-top: 80px;
  padding-right: 40px;
  box-sizing: border-box;

  text-align: right;
  font-size: 7vw;
  font-family: 'Elice DX Neolli';
  font-weight: 900;
  color: ${({ theme }) => theme.main};
  line-height: 124%;
  text-shadow: 5px 5px #fff7c7;
`;

export const Scroll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #bdbdbd;
  margin: 50px 0 30px;
  font-size: 12px;
`;
