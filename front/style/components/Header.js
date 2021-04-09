import styled, { css } from 'styled-components';

export const StHeader = styled.div`
    z-index:9999;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    background-color:#0d0e19;
    /* .wrapper */
    > div{
        display:flex;
        justify-content: space-between;
    }
    .menu{
        display:flex;
        a {
            color:#fff;
            padding:1em;
            display:block;
            text-align:center;이거 
            text-decoration:none;
            font-weight:bold;
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
    position:relative;
    display:inline-block;
    padding-right:1em;
    > button{
        color:#fff;
        font-size:.875rem;
        cursor:pointer;
    }

`;

export const StMenuUl = styled.ul`
    transition:all .2s;
    position:absolute;
    left:0;
    margin-top:1em;
    background-color:#fff;
    border:1px solid #ddd;
    opacity:0;
    top:70%;
    visibility: hidden;

    li a{
        font-size: .8rem;
        color:#666;
        display:block;
        padding:.75em .5em;
        width:110px;
        text-decoration:none;
        font-weight:normal;
        &:hover{
            background-color:#f9f9f9;
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

    ${(props) => props.stMainColor && css`
        border:1px solid #5f56e0;
        background-color:#5f56e0;
    `}
`;

export const StButtonSm = styled.button`
    padding:.3rem .5rem;
    display:block;
    text-align:center;
    text-decoration:none;
    color:#fff;
    font-size:.7rem;
    border:1px solid #383838;
    background-color:transparent;
    border-radius:.25rem;
    cursor:pointer;
    margin-left:1em;
    line-height:1;

    ${(props) => props.stOrange && css`
        border:1px solid #5f56e0;
        background-color:#5f56e0;
    `}

`;
