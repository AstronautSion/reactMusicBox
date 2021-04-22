import styled from "styled-components";

export const StCheckbox = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  font-size: 1rem;
  text-align: left;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: top;
  margin: 1em 0;
  color: #8d8fa0;
  font-size: 0.875rem;
  text-indent: 5px;
  line-height: 1;

  & > input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    & ~ span {
      position: absolute;
      top: -2px;
      left: 0;
      height: 17px;
      width: 17px;
      background-color: #fff;
      border: 1px solid #ddd;
      i {
        position: absolute;
        display: block;
        left: 6px;
        top: 2px;
        width: 4px;
        height: 8px;
        border: solid #fff;
        border-width: 0 2px 2px 0;
        border-color: #5f56e0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
      &.disabled {
        background-color: #ddd;
        i {
          display: none;
        }
      }
      &.disabled.checked {
        background-color: rgba(213, 63, 65, 0.4);
        i {
          display: block;
        }
      }
    }
  }
`;
