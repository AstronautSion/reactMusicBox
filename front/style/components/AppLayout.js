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

 

export const StInput = styled.input`
    width:100%;
    height:40px;
    line-height:1;
    font-size:1rem;
    border-width:1px;
    border-style:solid;
    color:#111;
    padding:0 1em;
    box-sizing:border-box;
    border-radius:.25em;
    border-color: ${ props => props.stColor || '#ddd'};
    margin: ${props => props.stMargin || '0'};
`;

export const StLable = styled.label`
    font-size:1rem;
    margin-bottom:.5em;
    display:block;
`;

export const StSelect = styled.select`
    width:100%;
    height:40px;
    line-height:1;
    font-size:1rem;
    border-width:1px;
    border-style:solid;
    color:#111;
    padding:0 1em;
    box-sizing:border-box;
    border-radius:.25em;
    border-color: ${ props => props.stColor || '#ddd'};
    margin: ${props => props.stMargin || '0'};
`;

export const StP = styled.p`
    display:block;
    line-height:1.4;
    font-size: ${props => {
        if(props.sm){ return '.785rem';}
        else if(props.lg){return '1.2rem;';}
        else{return '1rem;'} 
    }};
    color: ${props => {
        if(props.light){return '#666'}
        else{return '#111'}
    }};
`;