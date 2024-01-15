import { useState } from 'react';
import * as styled from './EditMenu.styled';
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
    if (data.length) {
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
      <styled.IconBox className={size && 'small'} onClick={handleClickEditIcon} onMouseLeave={handleClose}>
        <MoreVert className="icon pointer" onClick={handleOpen} />
        {open && (
          <ul className="menu pointer">
            <li onClick={handleEdit}>수정하기</li>
            {handleRemove && <li onClick={handleRemove}>삭제하기</li>}
          </ul>
        )}
      </styled.IconBox>
    </>
  );
}
