import React, { useCallback, useRef, useState } from 'react';
import { StP } from '../../style/components/AppLayout';
import { StCheckbox, StInput, StLable, StSelect } from '../../style/Form';
import useInput from '../../hooks/useInput';
import { useDispatch } from 'react-redux';
import { loginAction, popupClose } from '../../reducers/user';
import styled from '@emotion/styled';



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


const LoginForm = () => {
	const dispatch = useDispatch();
 
	const [order, setOrder] = useState(0);
	const [signin, onChangeSignin] = useInput('');
	const [account, onChangeAccount] = useInput('');
	const [password, onChangePassword] = useInput('');
	const [nickname, onChangeNickname] = useInput('');
	const [age, onChangeAge] = useInput(0);
	
	const [agree, setAgree] = useState(false);
	const onCheckAgree = (e) => {
		e.preventDefault();
		setAgree(!agree); 
	}
	const gender = useRef('');
	const onClickNext = () =>{
		(order === 3) ? setOrder(0) : setOrder(order + 1);
	}
	const onClickBackContents = () =>{ setOrder(0); }
	const onSubmitFIndAccount = (e) => {
		e.preventDefault();
		if(signin){ onClickNext(); }
	}

	const onClickLoginFacebook = useCallback(() => {
		dispatch(loginAction({
			id: account,
			password
		}));
		dispatch(popupClose);
		setOrder(0);
	}, []);

	const onClickLoginGoogle = useCallback(() => {
		dispatch(loginAction({
			id: account,
			password
		}));
		dispatch(popupClose);
		setOrder(0);
	}, []);

	return(
	
		<div>
			{order === 0 && 
				<>
					<div>
						<StBtnLoginForm stFacebook stMargin="0" type="button" onClick={onClickLoginFacebook}>Continue with Facebook</StBtnLoginForm>
						<StBtnLoginForm stGoogle type="button" onClick={onClickLoginGoogle}>Continue with Google</StBtnLoginForm>
					</div>
					<hr />
					<form onSubmit={onSubmitFIndAccount}>
						<StInput type="text" value={signin} onChange={onChangeSignin} minLength="8" maxLength="20" required />
						<StBtnLoginForm type="submit" >Continue</StBtnLoginForm>
					</form>
				</>
			}
			{order === 1 && 
				<form>
					<button onClick={onClickBackContents} type="button">&larr;</button>
					<StLoginFormTitle>Create your MusicBox account</StLoginFormTitle>
					<div>
						<StInput type="text" stMargin="0 0 1em 0" value={account} onChange={onChangeAccount} minLength="8" maxLength="20" required />
					</div>
					<div>
						<StLable>Choose a password</StLable>
						<StInput type="password" value={password} onChange={onChangePassword} minLength="10" maxLength="30" placeholder="비밀번호를 입력해주세요." required /> 
					</div>
					<div>
						<StCheckbox onClick={onCheckAgree}>
								<input type="checkbox" id="agree" checked={agree} required />
								<span></span>
								동의 합니다.
						</StCheckbox>
					</div>
					<div>
							<StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
					</div>
				</form>
			}
			{order === 2 && 
				<form>
					<StLoginFormTitle>Create your MusicBox account</StLoginFormTitle>
					<div>
						<StLable>Tell us your age</StLable>
						<StInput type="number" stMargin="0 0 1em 0" value={age} onChange={onChangeAge} />
					</div>
					<div>
						<StLable>Gender</StLable>
						<StSelect ref={gender}>
								<option value="0">Indicate your gender</option>
								<option value="female">Female</option>
								<option value="Male">Male</option>
								<option value="notSay">Prefer not to say</option>
						</StSelect>
					</div>
					<div>
						<StBtnLoginForm type="submit" onClick={onClickNext}>Continue</StBtnLoginForm>
					</div>
				</form>
			}
			{order === 3 && 
				<form>
					<StLoginFormTitle>Tell us a bit<br />about yourself</StLoginFormTitle>
					<div>
						<StLable>Choose your display name</StLable>
						<StInput type="text" stMargin="0 0 1em 0" value={nickname} onChange={onChangeNickname} />
						<StP sm light>Your display name can be anything you like. Your name or artist name are good choices.</StP>
					</div>
					<div>
						<StBtnLoginForm type="submit" onClick={onClickNext}>Get stared</StBtnLoginForm>
					</div>
				</form>
			}
		</div>
		
	);
}
 
export default LoginForm;