import { styled } from "styled-components";
import personImg from "/svg/person_img.svg";
import { Input, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

export function CommentInput() {
  return (
    <InputLayout>
      <UserImg src={personImg} />
      <Input placeholder="댓글 추가" sx={{ width: "100%" }} />
      <IconButton size="small">
        <Send sx={{ transform: "rotate(-15deg)" }} />
      </IconButton>
    </InputLayout>
  );
}

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding-bottom: 20px;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;
