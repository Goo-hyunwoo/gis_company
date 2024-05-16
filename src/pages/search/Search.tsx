import React from "react";
import styled from "@emotion/styled";
import SearchInput, { screenOut } from "./SearchInput";

const Section = styled.div`
  float: left;
  position: relative;
  z-index: 30;
  width: 390px;
  height: 116px;
  background-color: #258fff;
`;

const Header = styled.div`
  position: relative;
  height: 94px;
  padding: 20px 20px 2px;
  color: #fff;
`;

const Title = styled.h1`
  width: 95px;
  padding: 5px 0 21px 36px;
  font-size: 100%;
  margin: 0;

  & > a {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 22px;
    font-size: 0;
    line-height: 0;
    background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/title/kakaomap_logo.png)
      no-repeat 0 0;
    text-indent: -9999px;

    color: #333;
    text-decoration: none;
  }
`;

const Button = styled.button`
  margin: 0;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  overflow: visible;
  background: 0;
  border-radius: 0;
`;

const HeaderButton = styled(Button)`
  overflow: hidden;
  position: absolute;
  top: 23px;
  left: 17px;
  z-index: 10;
  width: 22px;
  height: 22px;
  font-size: 0;
  line-height: 0;
  background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/title/ico_menu.png)
    no-repeat 0 0;
  text-indent: -9999px;
`;

const ScreenOut = styled.strong(screenOut);

export default function Search() {
  return (
    <Section>
      <Header>
        <Title>
          <a href="?nil_profile=title&amp;nil_src=local">도야지맵</a>
        </Title>
        <HeaderButton type="button">더보기 메뉴 열기</HeaderButton>
        <ScreenOut className="screen_out">검색</ScreenOut>

        <SearchInput />
      </Header>
    </Section>
  );
}
