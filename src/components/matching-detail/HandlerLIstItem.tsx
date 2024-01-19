import { RequestHandlerType } from 'src/types';
import { useDispatch } from 'react-redux';
import { AppDispatch, setSelectedHandler } from 'store/index';
import userImage from '/svg/user_image1.svg';
import { ItemContainer, ItemLayout, UserImg, UserInfo } from './HandlerListItem.style';
import Button from '@mui/material/Button';

interface type {
  handler: RequestHandlerType;
}

export function HandlerListItem({ handler }: type) {
  const dispatch = useDispatch<AppDispatch>();
  const { nickname, _id: id, userImg, address } = handler.user;

  const handleOnClick = () => {
    dispatch(setSelectedHandler(handler));
  };

  const onClickToProfileHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <ItemContainer onClick={handleOnClick}>
      <ItemLayout>
        <UserImg src={userImg || userImage} className='user-img' />
        <UserInfo>
          <span>{nickname}</span>
          <span>{address.text}</span>
        </UserInfo>
        <Button variant="outlined" size="small" color="subW" sx={{ minWidth: 'fit-content' }} onClick={onClickToProfileHandler}>
          프로필
        </Button>
      </ItemLayout>
    </ItemContainer>
  );
}

