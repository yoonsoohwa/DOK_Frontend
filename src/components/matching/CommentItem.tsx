import { styled } from "styled-components";
import personImg from "/svg/person_img.svg";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export function CommentItem() {
  return (
    <CommnetItemLayout>
      <UserImg src={personImg} />
      <div>
        <TextLayout>
          <span>쿵치팍치</span>
          <span>25분 전</span>
        </TextLayout>
        <p>신청 많이 해주세요~!</p>
      </div>
    </CommnetItemLayout>
  );
}

const CommnetItemLayout = styled.div`
  display: flex;
  gap: 7px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;

const TextLayout = styled(CommnetItemLayout)`
align-items: center;
  > span:first-of-type {
    font-weight: 600;
  }

  > span:last-of-type {
    font-size: 12px;
    color: #9d9d9d;
  }
`;
