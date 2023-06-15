import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--size": (size === "small" ? 14 : 18) + "px",
        "--borderWidth": (size === "small" ? 1 : 2) + "px"
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <div>
        <label for="inp">
          <Icon id={icon} size={size === "small" ? 16 : 24} strokeWidth="2" />
        </label>
        <Input id="inp" type="text" placeholder={placeholder} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  border-radius: 4px;
  padding: 2px;
  color: ${COLORS.gray700};
  &: focus-within {
    outline: solid ${COLORS.primary};
  }
  &: hover {
    color: black;
  }

  & > div {
    width: var(--width);
    border-bottom: var(--borderWidth) solid black;
    & > label > div {
      display: inline-block;
      vertical-align: middle;
    }
  }
`;

const Input = styled.input`
  width: calc(100% - 1.4 * var(--size) - 16px);
  outline: none;
  display: inline-block;
  border: none;
  font-size: var(--size);
  vertical-align: middle;
  margin: 4px 8px;
  color: inherit;
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
