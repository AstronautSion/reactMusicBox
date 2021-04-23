import styled, { css } from "styled-components";

export const StHeader = styled.div`
    z-index:9999;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background-color:#0d0e19;
    box-shadow:0 0 2em rgba(0,0,0,1);

    /* .wrapper */
    > div{
        display:flex;
        justify-content: space-between;
    }
    .menu{
        display:flex;
        a {
            color:#5f56e0;
            padding:1em;
            display:block;
            text-align:center;이거 
            text-decoration:none;
            font-weight:bold;
            &:hover{
                text-decoration:none;
            }
        }
    }
    .header__right{
        display:flex;
        align-items:center;
        justify-content: center;
        padding-right:1em;
    }
`;

export const StAccountMenu = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 1em;
  a {
    color: #fff;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const StBtnSignin = styled.a`
    padding:.5rem 1rem;
    display:block;
    text-align:center;
    text-decoration:none;
    color:#fff;
    font-size:.875rem;
    border:1px solid 
    border:1px solid #383838;
    background-color:transparent;
    border-radius:.25rem;
    cursor:pointer;
    margin-left:1em;
    line-height:1;
    &:hover{
        text-decoration:none;
    }

    ${(props) =>
      props.stMainColor &&
      css`
        border: 1px solid #5f56e0;
        background-color: #5f56e0;
      `}
`;

export const StButtonSm = styled.button`
  padding: 0.3rem 0.5rem;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-size: 0.7rem;
  border: 1px solid #383838;
  background-color: transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-left: 1em;
  line-height: 1;

  ${(props) =>
    props.stOrange &&
    css`
      border: 1px solid #5f56e0;
      background-color: #5f56e0;
    `}
`;
