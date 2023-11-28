import { useState } from 'react';
import styled from 'styled-components';
import { MoreVert } from '@mui/icons-material';

interface EditMenuProps {
  handleEdit: () => void;
  handleRemove?: () => void;
}

export function EditMenu({ handleEdit, handleRemove }: EditMenuProps) {
  const [open, setOpen] = useState(false);

  const handleStopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleOpen = (e: React.MouseEvent) => {
    setOpen(!open);
  };

  return (
    <IconBox onClick={handleStopPropagation}>
      <MoreVert className="icon" onClick={handleOpen} />
      {open && (
        <ul className="menu">
          <li onClick={handleEdit}>수정하기</li>
          {handleRemove && <li onClick={handleRemove}>삭제하기</li>}
        </ul>
      )}
    </IconBox>
  );
}

const IconBox = styled.div`
  position: absolute;
  right: 10px;
  padding: 6px 0;

  .icon {
    color: #747474;
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
