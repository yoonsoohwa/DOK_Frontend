import React, { Children } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { styled } from 'styled-components';
import { MatchingCard } from '../matching/Card';
import { Link, useNavigate } from 'react-router-dom';

export function MainSection2() {
  const { matchingPosts } = useSelector((state: RootState) => state.main);
  const nav = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    nav('/matching');
  };

  return (
    <Section>
      <InnerBox>
        <Title>
          <h2 className="pointer" onClick={handleClick}>
            오늘의 매칭 글
          </h2>
          <div onClick={handleClick} className="send-text pointer">
            자세히 보러가기
          </div>
        </Title>
        <Contents>{Children.toArray(matchingPosts.map((data) => <MatchingCard setOpenAlert={() => {}} post={data} />))}</Contents>
      </InnerBox>
      <img src={`https://capsule-render.vercel.app/api?type=waving&color=FCD11E&height=${window.innerWidth}&section=footer`} />
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
  overflow: hidden;

  > img {
    position: absolute;
    width: 100%;
    top: 300px;
    z-index: -1;
  }
`;

const InnerBox = styled.div`
  height: fit-content;
  display: flex;
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
  transition: all 300ms;

  h2 {
    font-size: 40px;
    margin: 0;
    margin-top: 110px;
    color: ${({ theme }) => theme.main};
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
  width: 100%;
  height: ${bottom}px;
  background-color: ${({ theme }) => theme.main};
  position: absolute;
  top: ${top}px;
  z-index: -1;
`;
