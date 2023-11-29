import styled from 'styled-components';

export function NotFound() {
  return (
    <Layout>
      <img src="https://item.kakaocdn.net/do/bdf2b477837e8664559b1385bb9d0b0641d1a2caccd0c566eab28b91e2e5d306" />
      <div>
        <div className="error">404 Not Found</div>
        <h2 className="title">페이지를 찾을 수 없습니다.</h2>
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