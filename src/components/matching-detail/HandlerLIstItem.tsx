import { styled } from "styled-components";
import personImg from "/svg/person_img.svg";
import { Button } from "@mui/material";

export function HandlerListItem() {
  return (
    <ItemContainer>
      <ItemLayout>
        <UserImg src={personImg} />
        <UserInfo>
          <span>쿵치팍치</span>
          <span>서울특별시 종로구 효자동</span>
        </UserInfo>
        <Button variant="outlined" size="small" color="subW" sx={{ minWidth: "fit-content" }}>
          프로필
        </Button>
      </ItemLayout>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  height: 3rem;
  padding: 5px;
  background-color: ${({ theme }) => theme.main4};
  box-sizing: border-box;
  &:hover {
    background: #eaeaea;
  }
`;

const ItemLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;

const UserInfo = styled(ItemLayout)`
  flex-direction: column;
  align-items: flex-start;

  > span:first-of-type {
    font-size: 16px;
  }

  > span:last-of-type {
    font-size: 10px;
  }
`;
