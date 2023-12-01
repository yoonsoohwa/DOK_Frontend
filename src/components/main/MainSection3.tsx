import React, { Children } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { styled } from 'styled-components';
import { CertifiPostCard } from '../certification/PostCard';
import { useNavigate } from 'react-router-dom';

export function MainSection3() {
  const { certificationPosts } = useSelector((state: RootState) => state.main);
  const nav = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    nav('/certification');
  };

  return (
    <Section>
      <InnerBox>
        <Title>
          <h2 className="pointer" onClick={handleClick}>
            믿음직한 인증 글
          </h2>
          <div className="send-text pointer" onClick={handleClick}>
            자세히 보러가기
          </div>
        </Title>
        <Contents onClick={handleClick}>{Children.toArray(certificationPosts.map((data, index) => <CertifiPostCard index={index} onClick={() => {}} contents={data} />))}</Contents>
      </InnerBox>
      <img src="https://capsule-render.vercel.app/api?type=waving&color=4194CB&height=250&section=footer" />
      <BackgroundBox></BackgroundBox>
    </Section>
  );
}

const top = 380;
const bottom = 280;

const Section = styled.div`
  position: relative; // sticky 가 relative를 만나야 끝남. 건드리지 말 것

  width: 100%;
  height: ${top + bottom}px;
  display: flex;
  justify-content: center;
  align-items: end;

  > img {
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: -10;
  }
`;

const InnerBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 80px 0 50px;
`;

const Title = styled.div`
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
  }
`;

const Contents = styled.div`
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

const BackgroundBox = styled.div`
  display: none;
  width: 100%;
  height: ${bottom}px;
  background-color: ${({ theme }) => theme.sub};
  position: absolute;
  top: ${top}px;
  z-index: -1;
`;
