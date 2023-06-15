import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
// import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <span>{displayedValue}</span>
      <select value={value} onChange={onChange}>
        {children}
      </select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  display: inline-block;
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${COLORS.gray700};
  line-height: 19px;

  &:hover {
    color: ${COLORS.black};
  }
  &:focus-within {
    outline: solid -webkit-focus-ring-color;
  }
  & select {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity:0;
    border: none;
    appearance: none;
  }

  & span::after {
    display: inline-block;
    margin-left: 24px;
    content: "";
    width: 12px;
    height: 12px;
    margin-bottom: 2.5px;
    margin-right: 2.5px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg);
  }
`;

export default Select;
