import { useState } from 'react';
import styled from 'styled-components';
import { MoreVert } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { setMatchingPostEditId, setOpenDeleteAlert, setOpenEditAlert } from 'store/index';
import { matchingPostDetailUrl } from 'api/apiUrls';
import { useNavigate } from 'react-router-dom';
import { MatchingPostType } from 'src/types';

interface EditMenuProps {
  post: MatchingPostType;
  size?: 'small';
}

export function EditMenu({ post, size }: EditMenuProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickEditIcon = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(setMatchingPostEditId(post._id));
  };

  const handleOpen = (e: React.MouseEvent) => {
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
  };

  const handleEdit = async () => {
    const res = await fetch(`${matchingPostDetailUrl}/handler/${post._id}`, { credentials: 'include' });
    const data = await res.json();
    console.log('?', data);
    if (data.length) {
      console.log('data: ', data);
      return dispatch(setOpenEditAlert(true));
    }
    navigate(`/matching/write/${post._id}`, { state: { post } });
  };

  const handleRemove = async () => {
    dispatch(setOpenDeleteAlert(true));
    dispatch(setMatchingPostEditId(post._id));
  };

  return (
    <>
      <IconBox className={size && 'small'} onClick={handleClickEditIcon} onMouseLeave={handleClose}>
        <MoreVert className="icon pointer" onClick={handleOpen} />
        {open && (
          <ul className="menu pointer">
            <li onClick={handleEdit}>수정하기</li>
            {handleRemove && <li onClick={handleRemove}>삭제하기</li>}
          </ul>
        )}
      </IconBox>
    </>
  );
}

const IconBox = styled.div`
  position: absolute;
  right: 8px;
  padding: 12px 10px;

  .icon {
    color: #747474;
    width: 30px;
    height: 30px;

    &:hover {
      color: ${({ theme }) => theme.sub};
    }
  }

  &.small {
    padding: 6px 0px 6px 20px;

    .icon {
      width: 24px;
      height: 24px;
    }
  }

  .menu {
    position: absolute;
    right: 0;
    width: fit-content;
    min-width: 100px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 1px #00000039;
    padding: 4px 0;
    color: #505050;

    li {
      padding: 4px 10px;
      border-top: #f5f5f5 solid 1px;
      font-size: 16px;
    }

    li:hover {
      background-color: #e4f5fe;
      color: #000;
    }

    li:nth-child(1) {
      border: none;
    }
  }
`;
