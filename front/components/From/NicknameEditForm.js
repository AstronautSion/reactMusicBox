import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StProfileContainer = styled.div`
     
`;

const NicknameEditForm = ({ nickname }) => {
  const profileUrl = 'http://cdn.indiepost.co.kr/uploads/images/2017/12/29/qYxDCS-700x340.jpeg';

  return (
    <>
      <StProfileContainer stUrl={profileUrl}>
        <img className="profile__img" src="" />
        <h3 className="profile__nickname">{nickname}</h3>
      </StProfileContainer>
    </>
  );
};

NicknameEditForm.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default NicknameEditForm;
