import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  display: block;
  unicode-bidi: isolate;

  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 90px;
    height: 90px;
    z-index: 0;
    width: 100%;
  }

  &.Howto {
    top: 0;
    padding-top: 120px;
    background: #f9f9f9
      url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_my.png)
      no-repeat 0 100%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 90px;
      height: 90px;
      z-index: 0;
      width: 100%;
      background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_my2.png)
        no-repeat 0 0;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 120px;
      z-index: 0;
      width: 100%;
      background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_my3.png)
        no-repeat 0 0;
    }

    &.JOIN {
      background: #f9f9f9
        url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_myjoin.png)
        no-repeat 0 100%;

      &::before {
        background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_myjoin2.png)
          no-repeat 0 0;
      }

      &::after {
        background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/howto/bg_none_myjoin3.png)
          no-repeat 0 0;
      }
    }
  }
`;

const Strong = styled.strong`
  display: block;
  padding-top: 62px;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  color: #000;
  letter-spacing: -1px;
`;

const P = styled.p`
  margin: 0;
  padding: 0;
  padding-top: 10px;
  font-size: 13px;
  line-height: 19px;
  color: #999;
  letter-spacing: -1px;
`;

const MyLink = styled.a`
  display: inline-block;
  width: 80px;
  padding: 8px 0 7px 0;
  margin-top: 28px;
  border-radius: 3px;
  font-weight: 500;
  font-size: 13px;
  color: #999;
  letter-spacing: -1px;
  color: #fff;
  background-color: #3396ff;
  box-sizing: border-box;
  text-decoration: none;

  &:-webkit-any-link {
    cursor: pointer;
  }
`;

export default function MyPage() {
  return (
    <Container className="Howto JOIN">
      <Strong>
        자주 가는 장소는
        <br />
        등록해서 사용해요
      </Strong>
      <P>
        집이나 회사 등 자주 가는 장소는 즐겨찾기로 등록하여
        <br />
        언제 어디서나 쉽고 빠르게 확인하세요.
      </P>
      <MyLink href="#none">로그인</MyLink>
    </Container>
  );
}
