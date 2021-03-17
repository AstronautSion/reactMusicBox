import styled from '@emotion/styled';

export const StPopupWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-contents:center;
    align-items: center;
    background-color:rgba(0,0,0,.75);

    > button {
        position:absolute;
        top:1em;
        right:1em;
        font-size:1rem;
        color:#fff;
    }
`;