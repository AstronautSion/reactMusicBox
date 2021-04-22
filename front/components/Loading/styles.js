import styled, { css } from "styled-components";

export const StLoading = styled.div`
  position: relative;
  display: inline-block;
  width: 53px;
  height: 50px;
  ${(props) =>
    props.center &&
    css`
      display: block;
      margin: 0 auto;
    `}

  div {
    position: absolute;
    top: 25px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 0px;
    animation: loading1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 0px;
    animation: loading2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 25px;
    animation: loading2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 47px;
    animation: loading3 0.6s infinite;
  }
  @keyframes loading1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes loading3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes loading2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(23px, 0);
    }
  }
`;
