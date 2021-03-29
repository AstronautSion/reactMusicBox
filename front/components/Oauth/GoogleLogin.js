import React, { useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import { StBtnLoginForm } from '../../style/LoginForm';
import PropTypes from 'prop-types';

const GoogleLoginButton = ({setOrder}) => {
  
  const googleClientId = process.env.GOOGLE_CLIENT_ID;
  console.log('googleClientId::',googleClientId)
	const responseGoogle = useCallback((e) => {
    console.log(e);
		setOrder(2);
	}, []);
  
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
  setOrder: PropTypes.func.isRequired,
}

export default GoogleLoginButton;