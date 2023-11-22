import { styled } from "styled-components";
import personImg from "/svg/person_img.svg";
import { MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface type {
  commentType?: "reply";
}

export function CommentItem({ commentType }: type) {
  return (
    <CommentItemLayout className={commentType}>
      <UserImg src={personImg} />
      <div>
        <CommentInfo>
          <span>쿵치팍치</span>
          <span>25분 전</span>
        </CommentInfo>
        <p>신청 많이 해주세요~!</p>
        <CommentOption>
            {!commentType ? (<span id="addReply">댓글쓰기</span>) : null}
          <span id="commentEdit">수정</span>
          <span id="commentDelete">삭제</span>
        </CommentOption>
      </div>
    </CommentItemLayout>
  );
}

const CommentItemLayout = styled.div`
  display: flex;
  gap: 7px;
  padding: 3px 0;

  &.reply {
    padding-left: 40px;
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;

const CommentInfo = styled(CommentItemLayout)`
  align-items: center;

  > span:first-of-type {
    font-weight: 600;
  }

  > span:last-of-type {
    font-size: 12px;
    color: #9d9d9d;
  }
`;

const CommentOption = styled(CommentItemLayout)`
  font-size: 12px;
`;
