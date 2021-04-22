import styled, { css } from "styled-components";

export const StInput = styled.input`
  width: 100%;
  height: 40px;
  line-height: 1;
  font-size: 1rem;
  border-width: 1px;
  border-style: solid;
  color: #111;
  padding: 0 1em;
  box-sizing: border-box;
  border-radius: 0.25em;
  border-color: ${(props) => props.stColor || "#ddd"};
  margin: ${(props) => props.stMargin || "0"};
  background-color: #fff;

  ${(props) =>
    props.readOnly &&
    css`
      background-color: #eee;
    `}
`;

export const StLable = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.5em;
  display: block;
  font-weight: 300;
  color: #8d8fa0;
`;

export const StSelect = styled.select`
  width: 100%;
  height: 40px;
  line-height: 1;
  font-size: 1rem;
  border-width: 1px;
  border-style: solid;
  color: #111;
  padding: 0 1em;
  box-sizing: border-box;
  border-radius: 0.25em;
  background-color: #fff;
  border-color: ${(props) => props.stColor || "#ddd"};
  margin: ${(props) => props.stMargin || "0"};
`;
