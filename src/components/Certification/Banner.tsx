import { styled } from "styled-components";
import BannerImage from "/svg/산책하는강아지와사람.svg";
import { ListPageBanner } from "../Common/ListPageBanner";

export function CertifiBanner() {
  const style: {} = {
    position: "relative",
    bottom: "-10px",
  };
  const desc = (
    <>
      이웃 주민들과 가깝고 따뜻한 교류를 경험해보세요
      <br />
      우리 아이의 산책이 어땠는지 직접 확인해 보세요!
    </>
  );

  return (
    <ListPageBanner title={"산책 인증"} desc={desc} color="sub3">
      <img style={style} src={BannerImage} />
    </ListPageBanner>
  );
}
