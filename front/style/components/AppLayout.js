import styled from "@emotion/styled";

export const StHeader = styled.div`
    width:100%;
    background-color:#111;

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
            text-align:center;
            text-decoration:none;
            font-weight:bold;
        }
    }
    .header__right{
        display:flex;
        align-items:center;
        justify-content: center;
    }
`;

export const StBtnSignin = styled.button`
    padding:.5rem 1rem;
    display:block;
    text-align:center;
    text-decoration:none;
    color:#fff;
    font-size:.875rem;
    border:1px solid #ddd;
    border-radius:.25rem;
    cursor:pointer;
    margin-left:1em;
`;

export const StWrapper = styled.div`
    max-width:1200px;
    width: 95%;
    margin:0 auto;
`;

