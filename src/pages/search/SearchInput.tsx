import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

const SearchDiv = styled.div`
  display: block;
  unicode-bidi: isolate;
`;

const Form = styled.form`
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 999;
`;

const FieldSet = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  position: relative;
  height: 46px;
`;

export const screenOut = css`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const Legend = styled.legend(screenOut);
const H2 = styled.h2(screenOut);

const BoxSearchBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 46px;
  border-radius: 3px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.15);
`;

const Input = styled.input`
  float: left;
  width: 277px;
  height: 19px;
  padding: 12px 16px 15px;
  border: 0 none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  background-color: transparent;
  outline: 0;
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

  overflow: hidden;
  background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/ico_search.png)
    no-repeat;

  float: left;
  width: 36px;
  height: 36px;
  margin: 5px 0;
  border: 0 none;
  font-size: 0;
  line-height: 0;
  background-position: 0 -120px;
  text-indent: -9999px;
  cursor: pointer;
`;

const ChoiceCurrentMap = styled.div`
  position: absolute;
  top: -38px;
  right: 0;
`;

const Checkbox = styled.input(screenOut);
const Label = styled.label`
  display: block;
  overflow: hidden;
  margin-top: -1px;
  padding-left: 20px;
  font-size: 12px;
  line-height: 15px;
  cursor: pointer;
`;

const CheckSpan = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 1px;
  width: 14px;
  height: 14px;
  background: url(//t1.daumcdn.net/localimg/localimages/07/2018/pc/search/ico_checkbox_190708.png)
    no-repeat 0 0;
  pointer-events: none;

  &.ACTIVE {
    background-position: 0 -20px;
  }
`;

export default function SearchInput() {
  const [isHere, setIsHere] = useState<boolean>(false);
  return (
    <SearchDiv>
      <Form>
        <FieldSet>
          <Legend>검색어 입력폼</Legend>
          <H2>
            <label htmlFor="search.keyword.query">지도 검색</label>
          </H2>
          <BoxSearchBar>
            <Input type="text" />
            <Button type="button">검색</Button>
          </BoxSearchBar>
          <ChoiceCurrentMap>
            <Checkbox
              type="checkbox"
              id="boundscheck"
              checked={isHere}
              onClick={() => setIsHere((prev) => !prev)}
            />
            <Label id="search.keyword.bounds" htmlFor="boundscheck">
              <CheckSpan
                id="search.keyword.currentmap"
                className={isHere ? "ACTIVE" : ""}
              ></CheckSpan>
              현 지도 내 장소검색
            </Label>
          </ChoiceCurrentMap>
        </FieldSet>
      </Form>
    </SearchDiv>
  );
}
