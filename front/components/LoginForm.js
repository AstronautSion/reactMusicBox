import React, { useState } from 'react';
import { StInput, StLable, StP, StSelect } from '../style/components/AppLayout';
import { StBtnLoginForm, StLoginForm, StLoginFormTitle } from '../style/components/LoginForm';

const LoginForm = () => {
    const [order, setOrder] = useState(0);
    const [signin, setSignin] = useState('');
    const [nickname, setNickname] = useState('');
    const onChangeSignin = (e) => {
        setSignin(e.target.value);
    }
    const onClickNext = () =>{
        if(order === 2){
            setOrder(0);
            // close popup
        }else{
            setOrder(order + 1);
        }        
    }
    const onChangeNickname = (e) =>{
        setNickname(e.target.value);
    }
    return(
        <StLoginForm>
            {order === 0 && 
                <>
                    <div>
                        <StBtnLoginForm stFacebook stMargin="0" type="button">Continue with Facebook</StBtnLoginForm>
                        <StBtnLoginForm stGoogle type="button">Continue with Google</StBtnLoginForm>
                    </div>
                    <hr />
                    <div>
                        <StInput type="text" value={signin} onChange={onChangeSignin} />
                        <StBtnLoginForm type="button" onClick={onClickNext} >Continue</StBtnLoginForm>
                    </div>
                </>
            }
            {order === 1 && 
                <>
                    <StLoginFormTitle>Create your MusicBox account</StLoginFormTitle>
                    <div>
                        <StLable>Tell us your age</StLable>
                        <StInput type="number" stMargin="0 0 1em 0" />
                    </div>
                    <div>
                        <StLable>Gender</StLable>
                        <StSelect>
                            <option value="0">Indicate your gender</option>
                            <option value="female">Female</option>
                            <option value="Male">Male</option>
                            <option value="notSay">Prefer not to say</option>
                        </StSelect>
                    </div>
                    <div>
                        <StBtnLoginForm type="button" onClick={onClickNext}>Continue</StBtnLoginForm>
                    </div>
                </>
            }
            {order === 2 && 
                <>
                    <StLoginFormTitle>Tell us a bit<br />about yourself</StLoginFormTitle>
                    <div>
                        <StLable>Choose your display name</StLable>
                        <StInput type="text" stMargin="0 0 1em 0" value={nickname} onChange={onChangeNickname} />
                        <StP sm light>Your display name can be anything you like. Your name or artist name are good choices.</StP>
                    </div>
                    <div>
                        <StBtnLoginForm type="button" onClick={onClickNext}>Get stared</StBtnLoginForm>
                    </div>
                </>
            }
        </StLoginForm>
    );
}

export default LoginForm;