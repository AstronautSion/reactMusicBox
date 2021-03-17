import styled from '@emotion/styled';

export const StLoginForm = styled.div`
    position:relative;
    background-color:#fff;
    max-width:500px;
    width:95%;
    margin:0 auto;
    padding:2em;
    box-sizing:border-box;
    
`;

export const StBtnLoginForm = styled.button`
    font-size:16px;
    line-height:18px;
    padding:10px; 15px;
    height:40px;
    cursor:pointer;
    display:block;
    width:100%;
    border-radius:.25em;
    color:${props => {
        if(props.stGoogle){
            return '#222';
        }else{
            return '#fff';
        }
    }};
    border:${props => {
        if( props.stFacebook ){
            return '1px solid #3578e5'
        }else if( props.stGoogle ){
            return '1px solid #ccc'
        }else{
            return '0'
        }
    }};
    margin: ${props => props.stMargin || "1em 0 0" };
    background-color:${props => {
        if(props.stFacebook){
            return '#3578e5';
        }else if(props.stGoogle){
            return '#fff';
        }else{
            return '#f50';
        }
    }};
`;


export const StLoginFormTitle = styled.h3`
    display:block;
    text-align:center;
    padding:1em 0 1.5em 0;
    font-size:1.65rem;
    font-weight:normal;
    line-height:1.5;
`;

