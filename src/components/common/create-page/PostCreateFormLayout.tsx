import React from 'react';
import { styled } from 'styled-components';
import { ButtonMain } from 'common/button/ButtonMain';
import { ButtonGray } from 'common/button/ButtonGray';

interface PostCreateFormLayoutProps {
  title: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onReset: () => void;
  buttonText?: string;
}

export function PostCreateFormLayout({ title, children, onSubmit, onReset, buttonText }: PostCreateFormLayoutProps) {
  return (
    <FormLayout>
      <h2>{title}</h2>
      <div className="contents">{children}</div>
      <Buttons>
        <ButtonMain text={buttonText || '작성하기'} onClick={onSubmit} />
        <ButtonGray text="취소" onClick={onReset} />
      </Buttons>
    </FormLayout>
  );
}

const FormLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  > h2 {
    font-size: 40px;
    font-weight: 00;
    margin: 60px 0 40px;
  }

  .contents {
    background: white;
    border: 3px solid ${({ theme }) => theme.main2};
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 50px 80px;
  }
`;

const Buttons = styled.div`
  display: flex;
  width: 180px;
  margin: 20px 0;
  justify-content: space-around;
`;
