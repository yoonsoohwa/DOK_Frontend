import { styled } from "styled-components";
import { AccountCircle, LocationOn, AccessTime, Height } from "@mui/icons-material";

export function MatchingCard() {
  return (
    <CardContainer>
      <PostUser>
        <AccountCircle sx={{ width: "38px", height: "38px" }} />
        <PostInfo>
          <span>I am 진이에요</span>
          <span>45분 전</span>
        </PostInfo>
      </PostUser>
      <AccessTime />
      <AccessTime />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 250px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.main4};
`;

const PostUser = styled.div`
  display: flex;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  & > :nth-child(2) {
    color: #8e8e8e;
    font-size: 10px;
  }
`;
