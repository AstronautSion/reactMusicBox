import React, { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import { StBtnLoginForm } from '../../style/LoginForm';
import PropTypes from 'prop-types';

const GoogleLoginButton = ({setNickname, setOrder}) => {
  
  const googleClientId = '1030853119585-cc2fqf9he0u14ue81l40ba66kkap9s82.apps.googleusercontent.com';
  const responseGoogle = useCallback((e) => {
    // 계정 검증 
    // 없으면 추가후 order 2 이동
    // 있으면 로그인 ->
    console.log(e);
    setNickname(e.profileObj.name);
    //e.accessToken
    //e.tokenId
    //e.googleid
    //e.profileObj.email
    //e.profileObj.name
    //e.profileObj.imageUrl
    setOrder(2);
	});
  
  return (
    <GoogleLogin
      clientId={googleClientId}
      render={renderProps => (
        <StBtnLoginForm stGoogle
          type="button" 
          onClick={renderProps.onClick} 
          disabled={renderProps.disabled}>Continue with Google</StBtnLoginForm>
      )}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

GoogleLoginButton.propTypes = {
  setNickname: PropTypes.func.isRequired,
  setOrder: PropTypes.func.isRequired,
}

export default GoogleLoginButton;