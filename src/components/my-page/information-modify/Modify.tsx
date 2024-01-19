import { useState } from 'react';
import tabLeft from '/svg/modify_tab_left.svg';
import tabRight from '/svg/modify_tab_right.svg';
import { ModifyInfo } from './ModifyInfo';
import { ChangePassword } from './ChangePassword';
import { MainContainer, ModifyContainer, ModifyTab, TabContainer, TabImg } from './Modify.style';

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

