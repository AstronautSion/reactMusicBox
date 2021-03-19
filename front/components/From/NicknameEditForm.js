import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StProfileContainer = styled.div`
    position:relative;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    background-image:url( ${props => { return String(props.stUrl) }} );
    display:flex;
    height:250px;
    justify-content: flex-start;
    align-items: flex-start;
    padding:1em 2em; 
    box-sizing:border-box;

    .profile__img{
        display:inline-block;
        border-radius:100%;
        overflow:hidden;
        width:120px;
        height:120px;
        position:relative;
        background-color:#111;      
        margin-right:1em;
    } 
    .profile__nickname{
        margin-top:.5em;
        font-size:1.5rem;
        font-weight:bold;
        display:inline-block;
        padding:.3em .5em;
        line-height:1;
        background-color:rgba(0,0,0,0.8);
        color:#fff;
    }
`;

const NicknameEditForm = ({nickname}) => {

    const profileUrl = "http://cdn.indiepost.co.kr/uploads/images/2017/12/29/qYxDCS-700x340.jpeg";

    return(
        <>
            <StProfileContainer stUrl={profileUrl}>
                <img className="profile__img" src="" />
                <h3 className="profile__nickname">{nickname}</h3>
            </StProfileContainer>
        </>
    );
}

NicknameEditForm.propTypes = {
    nickname : PropTypes.string.isRequired,
}

export default NicknameEditForm;