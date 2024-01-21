import { styled } from 'styled-components';

export const WalkInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  padding-top: 10px;

  .location span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div {
    display: flex;
    align-items: center;
    padding: 3px 0;

    & > span {
      padding-left: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    & > div {
      padding: 1px 0;
    }
  }
`;

export const MatchingStatusImage = styled.img`
  position: absolute;
  top: -1px;
  right: -4px;
  width: 7em;
`;

export const DogIcon = styled.img`
  width: 8%;
`;
