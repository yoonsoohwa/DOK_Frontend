import styled from 'styled-components';

export function Forbidden() {
  return (
    <Layout>
      <img src="https://item.kakaocdn.net/do/bdf2b477837e8664559b1385bb9d0b0641d1a2caccd0c566eab28b91e2e5d306" />
      <div>
        <div className="error">403 Forbidden</div>
        <h2 className="title">잘못된 접근입니다.</h2>
      </div>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 140px);
  box-sizing: border-box;

  .error {
    font-size: larger;
  }

  .title {
    font-size: 2em;
  }
`;
