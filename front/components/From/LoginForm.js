import React, { useCallback, useState } from 'react';
import { StInput } from '../../style/Form';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { popupClose } from '../../reducers/user';
import GoogleLoginButton from '../oauth/googleLogin';
import { StBtnLoginForm } from '../../style/LoginForm';
import CreateAccountForm from './Login/createAccountForm';
import CreateAccountInfoForm from './Login/CreateAccountInfoForm';
import CreateAccountNicknameForm from './Login/CreateAccountNicknameForm';

const LoginForm = () => {
	const dispatch = useDispatch();
 
	const [order, setOrder] = useState(0);
	const [signin, onChangeSignin] = useInput('');
	
	const onSubmitFIndAccount = useCallback((e) => {
		e.preventDefault();
		if(signin){ 
			//아이디 검증 
			setOrder(1); 
		}
	},[signin]);

	const onClickLoginFacebook = useCallback(() => {
		// dispatch(loginAction({
		// 	id: account,
		// 	password
		// }));
		dispatch(popupClose);
		setOrder(0);
	}, []);


	return(
	
		<div>
			{order === 0 && 
				<>
					<div>
						<StBtnLoginForm stFacebook stMargin="0" type="button" onClick={onClickLoginFacebook}>Continue with Facebook</StBtnLoginForm>
						<GoogleLoginButton setOrder={setOrder} />
					</div>
					<hr />
					<form onSubmit={onSubmitFIndAccount}>
						<StInput type="text" value={signin} onChange={onChangeSignin} minLength="8" maxLength="20" required />
						<StBtnLoginForm type="submit" >Continue</StBtnLoginForm>
					</form>
				</>
			}
			{order === 1 && 
				<CreateAccountForm setOrder={setOrder} />
			}
			{order === 2 && 
				<CreateAccountInfoForm setOrder={setOrder} />
			}
			{order === 3 && 
				<CreateAccountNicknameForm setOrder={setOrder} />
			}
		</div>
		
	);
}
 
export default LoginForm;