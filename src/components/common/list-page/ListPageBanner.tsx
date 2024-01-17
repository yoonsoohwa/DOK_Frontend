import * as styled from './ListPageBanner.styled';
import petIcon from '/svg/pets.svg';
import footprintImg from '/svg/six_footprint.svg';
import React from 'react';

interface ListPageBannerProps {
  title: string;
  desc: string;
  children: React.ReactNode;
  color?: 'sub' | 'sub2' | 'sub3';
}

export function ListPageBanner({ title, desc, children, color }: ListPageBannerProps) {
  return (
    <styled.Section color={color}>
      <styled.InnerBox>
        <img className="pet-image" src={petIcon} />
        <styled.TitleBox>
          <h1>{title}</h1>
          <div className="desc">{desc}</div>
        </styled.TitleBox>
        <img className="footprint" src={footprintImg} />
        <styled.RightBox>{children}</styled.RightBox>
      </styled.InnerBox>
    </styled.Section>
  );
}
