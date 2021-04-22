import styled from "styled-components";

export const StVideoImageCardMenu = styled.div`
  transition: all 0.3s;
  position: absolute;
  bottom: 0.25em;
  right: 0.25em;
  opacity: 0;
`;
export const StVideoImageCardMenuButton = styled.button`
  transition: all 0.3s;
  display: block;
  width: 30px;
  height: 30px;
  margin-top: 0.5em;
  background-color: #fff;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1rem;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
