import { useState } from 'react';
import styled from 'styled-components';
import { MoreVert } from '@mui/icons-material';
import { AlertError } from 'common/alert/AlertError';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';

interface EditMenuProps {
  handleEdit: () => void;
  handleRemove?: () => void;
  _id?: string;
}

export function EditMenu({ handleEdit, handleRemove, _id }: EditMenuProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOpen = (e: React.MouseEvent) => {
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
  };

  return (
    <>
      <IconBox onClick={handleStopPropagation} onMouseLeave={handleClose}>
        <MoreVert className="icon" onClick={handleOpen} />
        {open && (
          <ul className="menu">
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
  right: 10px;
  padding: 6px 0;
  padding-left: 20px;

  .icon {
    color: #747474;

    &:hover {
      color: ${({ theme }) => theme.sub};
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
