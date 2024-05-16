import styled from "@emotion/styled";
import React from "react";

interface ShadowProps {
  flag: boolean;
}

const ShadowDiv = styled.div<ShadowProps>`
  height: 910px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => (props.flag ? "390px" : "0px")};
  z-index: 20;
  height: 100%;
`;

const Bar = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4px;
  height: 100%;
  background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/shadow/map_shadow.png)
    repeat-y;
`;

const Toggle = styled.span`
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 22px;
  height: 54px;
  font-size: 0;
  line-height: 0;
  background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/shadow/img_navi.png)
    no-repeat 0 0;
  text-indent: -9999px;
  cursor: pointer;

  &.collapse {
    left: 0;
    width: 28px;
    height: 66px;
    background-position: 0 -60px;
  }
`;

interface Props {
  flag: boolean;
  setFlag: (flag: boolean) => void;
}

export default function Shadow({ flag, setFlag }: Props) {
  return (
    <ShadowDiv flag={flag}>
      <Bar></Bar>
      <Toggle
        onClick={() => setFlag(!flag)}
        className={flag ? "" : "collapse"}
      ></Toggle>
    </ShadowDiv>
  );
}
