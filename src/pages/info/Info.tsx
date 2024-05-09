import styled from "@emotion/styled";
import React from "react";
import { screenOut } from "../search/SearchInput";

const Div = styled.div`
  overflow: hidden;
  float: left;
  position: relative;
  z-index: 25;
  width: 390px;
  background-color: #f9f9f9;
  clear: both;
`;

const Header = styled.div``;

const Main = styled.div`
  overflow: hidden;
  background-color: #258fff;
  color: #fff;
`;

const Navi = styled.div``;

const H2 = styled.h2(screenOut);

const Ul = styled.ul`
  overflow: hidden;
  position: relative;
  padding: 0 11px;
  background-color: #258fff;
  list-style: none;
  margin: 0;
`;

const Li = styled.li`
  float: left;
  padding: 12px 8px;

  & > a {
    display: block;
    overflow: hidden;
    width: 56px;
    height: 19px;
    padding: 4px 0 7px;
    border-radius: 3px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #a3cfff;
    color: rgba(255, 255, 255, 0.9);
    text-align: center;
    text-decoration: none;
  }
`;

export default function Info() {
  return (
    <Div>
      <Header>
        <Main>
          <Navi>
            <H2>검색 메뉴</H2>
            <Ul>
              <Li>
                <a href="/" title="검색">
                  검색
                </a>
              </Li>
              <Li>
                <a href="/" title="길찾기">
                  길찾기
                </a>
              </Li>
              <Li>
                <a href="/" title="버스">
                  버스
                </a>
              </Li>
              <Li>
                <a href="/" title="지하철">
                  지하철
                </a>
              </Li>
              <Li>
                <a href="/" title="즐겨찾기">
                  MY
                </a>
              </Li>
            </Ul>
          </Navi>
        </Main>
      </Header>
    </Div>
  );
}
