import React, { useCallback, useRef, useState } from 'react';
import { StP, StPopupWrapper } from '../style/components/AppLayout';
import { StBtnLoginForm, StLoginForm, StLoginFormTitle } from '../style/components/LoginForm';
import { StCheckbox, StInput, StLable, StSelect } from '../style/Form';
import PropTypes from 'prop-types';


const LoginForm = ({ setShowPopup, setIsLoggedIn }) => {
    const [order, setOrder] = useState(0);
    const [signin, setSignin] = useState('');
    
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const [nickname, setNickname] = useState('');
    const [age, setAge] = useState(0);
    const gender = useRef('');

    const onChangeSignin = (e) => {
        setSignin(e.target.value);
    }
    const onClickNext = () =>{
        if(order === 3){
            setOrder(0);
            // close popup
        }else{
            setOrder(order + 1);
        }        
    }
    const onChangeNickname = (e) =>{
        setNickname(e.target.value);
    }
    const onChangeAge = (e) => {
        setAge(e.target.value)
    }
    const onChangeAccount = (e) => {
        setAccount(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onCheckAgree = (e) => {
        e.preventDefault();
        setAgree(!agree); 
    }
    const onClickBackContents = () =>{
        setOrder(0);
    }
    const onSubmitFIndAccount = (e) => {
        e.preventDefault();
        if(signin){
            onClickNext();
        }
    }

    const onClickClosePopup = () => {
        setShowPopup(false);
    }

    const onClickLoginFacebook = useCallback(() => {
        setIsLoggedIn(true);
        setShowPopup(false);
        setOrder(0);
    }, []);

    const onClickLoginGoogle = useCallback(() => {
        setIsLoggedIn(true);
        setShowPopup(false);
        setOrder(0);
    }, []);

    return(   
        <StPopupWrapper>
            <button onClick={onClickClosePopup}>X</button>
            <StLoginForm>
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
            </StLoginForm>
        </StPopupWrapper>    
    );
}

LoginForm.propTypes = {
    setShowPopup : PropTypes.func.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
}
 
export default LoginForm;