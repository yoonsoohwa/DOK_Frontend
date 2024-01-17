import styled from 'styled-components';

export const Pet = styled.div`
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 18vw;

  &.left {
    float: left;
  }

  &.right {
    float: right;
  }

  &:nth-child(2) {
    margin-top: 26vw;
  }

  .gender-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      width: 4vw;
    }

    div {
      font-family: 'Gaegu';
      font-weight: 900;
      font-size: 3vw;
      color: #3e3e3e;
      height: 1em;
    }
  }

  .pet-img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    display: block;
    border-radius: 50%;
  }
`;
