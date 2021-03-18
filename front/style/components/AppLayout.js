import styled from "@emotion/styled";


export const StWrapper = styled.div`
    max-width:1200px;
    width: 95%;
    margin:0 auto;
`;

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

