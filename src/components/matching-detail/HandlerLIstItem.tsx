import { styled } from 'styled-components';
import personImg from '/svg/person_img.svg';
import { Button } from '@mui/material';
import { RequestHandlerType } from 'src/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setSelectedHandler } from 'store/index';

interface type {
  handler: RequestHandlerType;
}

export function HandlerListItem({ handler }: type) {
  const dispatch = useDispatch<AppDispatch>();

  const { nickname, address, _id: id } = handler.user;

  const onClickHandler = () => {
    dispatch(setSelectedHandler(handler));
  };

  const onClickToProfileHandler = (e:any) => {
    e.stopPropagation();
    console.log(handler)
  }

  return (
    <ItemContainer onClick={onClickHandler}>
      <ItemLayout>
        <UserImg src={personImg} />
        <UserInfo>
          <span>{nickname}</span>
          <span>{address}</span>
        </UserInfo>
        <Button variant="outlined" size="small" color="subW" sx={{ minWidth: 'fit-content' }} onClick={onClickToProfileHandler}>
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
