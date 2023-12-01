import { styled } from 'styled-components';
import { Button } from '@mui/material';
import { RequestHandlerType } from 'src/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, setSelectedHandler } from 'store/index';
import userImage from '/svg/user_image1.svg';

interface type {
  handler: RequestHandlerType;
}

export function HandlerListItem({ handler }: type) {
  const dispatch = useDispatch<AppDispatch>();
  const { nickname, _id: id, userImg, address } = handler.user;

  const onClickHandler = () => {
    dispatch(setSelectedHandler(handler));
  };

  const onClickToProfileHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <ItemContainer onClick={onClickHandler}>
      <ItemLayout>
        <UserImg src={userImg || userImage} className='user-img' />
        <UserInfo>
          <span>{nickname}</span>
          <span>{address.text}</span>
        </UserInfo>
        {/* <Button variant="outlined" size="small" color="subW" sx={{ minWidth: 'fit-content' }} onClick={onClickToProfileHandler}>
          프로필
        </Button> */}
      </ItemLayout>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  height: 50px;
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
  padding: 0 5px;
  justify-content: space-between;

  > span:first-of-type {
    font-size: 16px;
    font-weight: 500;
  }

  > span:last-of-type {
    font-size: 12px;
  }
`;
