/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  progressbarWidth: 370,
  progressbarHeight: { large: 24, medium: 12, small: 8 },
};

const ProgressBar = ({ value, size }) => {
  let w = SIZES.progressbarWidth;
  let h = SIZES.progressbarHeight[size];
  if (size === "large") {
    w -= 8;
    h -= 8;
  }
  let radius = size === "large" ? "8px" : "4px";
  return (
    <Wrapper size={size}
      style={{ '--radius': radius}}
      role="prpgressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}>
      <VisuallyHidden>Progress: {value}%</VisuallyHidden>
      <InnerWrapper aria-hidden w={w} h={h}>
        <Progress value={value} size={size} />
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${SIZES.progressbarWidth}px;
  height: ${(p) => SIZES.progressbarHeight[p.size]}px;
  padding: ${(p) => (p.size === "large" ? 4 : 0)}px;

  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: var(--radius);
`;
const InnerWrapper = styled.div`
  width: ${(p) => p.w}px;
  height: ${(p) => p.h}px;
  border-radius: 4px;

  overflow: hidden;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(p) => p.value}%;
  height: ${(p) => SIZES.progressbarHeight[p.size]}px;
`;

export default ProgressBar;
