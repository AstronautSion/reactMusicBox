import styled from "@emotion/styled";

export const StCheckbox = styled.label`
    display:inline-block; 
    position:relative; 
    padding-left:20px; 
    cursor:pointer; 
    font-size:1rem; 
    text-align:left; 
    -webkit-user-select:none; 
    -moz-user-select:none; 
    -ms-user-select:none; 
    user-select:none; 
    vertical-align:top;
    margin:1em 0;

    & > input[type="checkbox"] {
        position: absolute; 
        opacity: 0; 
        cursor: pointer; 
        height: 0; 
        width: 0;
        & ~ span{
            position:absolute; 
            top:0; 
            left:0; 
            height:17px; 
            width:17px; 
            background-color: #fff; 
            border:1px solid #ddd;

            &:after{
                content:""; 
                position:absolute; 
                display:none; 
                left:6px; 
                top:2px; 
                width:4px; 
                height:8px; 
                border:solid white; 
                border-width:0 2px 2px 0; 
                -webkit-transform:rotate(45deg);  
                -ms-transform:rotate(45deg); 
                transform:rotate(45deg);
            }
        }

        &:checked ~ span{
            background-color:#e54737;
            &:after{
                display:block;
            }
        }

        &:disabled ~ span{
            background-color:#ddd;
            &:after{
                display:none;
            }
        }

        &:disabled:checked ~ span{
            background-color:rgba(213,63,65,.4);
            &:after{
                display:block;
            }
        }
    }
    
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
 

