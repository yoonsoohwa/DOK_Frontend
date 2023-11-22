import { styled } from "styled-components";
import personImg from "/svg/person_img.svg";
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

interface type {
    commentType?: "reply", 
}

export function CommentItem({commentType} : type) {
  return (
      <CommentItemLayout className={commentType}>
        <UserImg src={personImg} />
        <div>
          <TextLayout>
            <span>쿵치팍치</span>
            <span>25분 전</span>
          </TextLayout>
          <p>신청 많이 해주세요~!</p>
        </div>
      </CommentItemLayout>
  );
}

const CommentItemLayout = styled.div`
  display: flex;
  gap: 7px;
  padding: 5px 0;

  &.reply {
    padding-left: 40px;
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;

const TextLayout = styled(CommentItemLayout)`
  align-items: center;
  > span:first-of-type {
    font-weight: 600;
  }

  > span:last-of-type {
    font-size: 12px;
    color: #9d9d9d;
  }
`;
