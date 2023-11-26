import styled from "styled-components";
import profile_badge from "/svg/profile_badge.svg";

interface UserNicknameProps {
  nickname: string;
  badge?: true;
}

export function UserNickname({ nickname, badge }: UserNicknameProps) {
  return (
    <NicknameBox>
      <span>{nickname || "user"}</span>
      {badge && <img src={profile_badge} />}
    </NicknameBox>
  );
}

const NicknameBox = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  img {
    height: 1.1em;
  }
`;
