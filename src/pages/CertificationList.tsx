import { styled } from "styled-components";
import React from "react";
import { Box, Button, IconButton, MobileStepper, Rating } from "@mui/material";
import { ListPageBanner } from "../components/common/ListPageBanner";
import BannerImage from "/svg/matchingBannerImage.svg";
import { ListPageTopBar } from "../components/common/ListPageTopBar";
import { CertificationPostDetail } from "../components/certification/PostDetail";
import { CertifiPostCard } from "../components/certification/PostCard";
import { MatchingCard } from "../components/matching/MatchingCard";
import { CertifiPostList } from "../components/certification/PostList";
import { CertifiBanner } from "../components/certification/Banner";

export function CertificationListPage() {
  return (
    <CertificationList>
      <CertifiBanner />
      <Section>
        <ListPageTopBar text={["132", "개의 산책 인증이 있습니다."]} />
        <CertifiPostList />
        <CertificationPostDetail />
      </Section>
    </CertificationList>
  );
}

const CertificationList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;
