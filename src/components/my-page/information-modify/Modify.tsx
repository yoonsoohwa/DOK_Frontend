import { styled } from 'styled-components';
import Button from '@mui/material/Button';
import { ChangeTextfiled } from './ChangeTextfiled';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'store/index';
import { useEffect, useRef, useState } from 'react';
import { ButtonMain } from 'common/button/ButtonMain';
import Modal from 'react-modal';
import DaumPostcode from 'react-daum-postcode';
import tabLeft from '/svg/modify_tab_left.svg';
import tabRight from '/svg/modify_tab_right.svg';
import { ModifyInfo } from './ModifyInfo';
import { ChangePassword } from './ChangePassword';
import userImage from '/svg/user_image1.svg';
import ModeIcon from '@mui/icons-material/Mode';
import { AlertSuccess } from 'common/alert/AlertSuccess';
import { AlertSnackbar } from 'common/alert/AlertSnackbar';
import { ChangeProfileImg } from './ChangeProfileImg';

export const Modify = () => {
  const [selected, setSelected] = useState<'info' | 'password'>('info');

  return (
    <MainContainer>
      <TabContainer>
        <ModifyTab className={selected === 'info' ? 'selected' : ''} onClick={() => setSelected('info')}>
          <span>개인정보 수정</span>
          {selected === 'info' && <TabImg $align='right' src={tabLeft} />}
        </ModifyTab>
        <ModifyTab className={selected === 'password' ? 'selected' : ''} onClick={() => setSelected('password')}>
          <span>비밀번호 변경</span>
          {selected === 'password' && <TabImg $align='left' src={tabRight} />}
        </ModifyTab>
      </TabContainer>
      <ModifyContainer>{selected === 'info' ? <ModifyInfo /> : <ChangePassword />}</ModifyContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 600px;
  padding: 30px 0;
`;

const TabContainer = styled.nav`
  width: 100%;
  display: flex;
`;

const ModifyTab = styled.div`
  height: 70px;
  width: 100%;
  text-align: center;
  border: #fcd11e dashed 3px;
  position: relative;

  &:first-of-type {
    border-top-left-radius: 10px;
  }

  &:last-of-type {
    border-top-right-radius: 10px;
  }

  > span {
    display: block;
    padding-top: 14px;
    font-size: 20px;
    font-weight: 500;
  }

  &.selected {
    border-style: solid;
    z-index: 5;
    background-color: #fff;
    border-bottom: 0px;
  }
`;

const TabImg = styled.img<{$align: 'left' | 'right'}>`
  position: absolute;
  top: -3px;
  ${props => props.$align} : -19px;
`;

const ModifyContainer = styled.div`
  border: #fcd11e solid 3px;
  border-radius: 10px;
  margin-top: -15px;
  position: relative;
  z-index: 3;
  background: #fff;
`;
