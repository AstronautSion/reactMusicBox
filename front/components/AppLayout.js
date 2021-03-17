import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { StHeader, StWrapper, StBtnSignin } from '../style/components/AppLayout';
import LoginForm from './LoginForm';
import PopupLayout from './PopupLayout';

const AppLayout = ({ children }) => {
    const [btnShowLoginForm, setBtnShowLoginForm ] = useState(false);
    const onclickLoginForm = () => {
        setBtnShowLoginForm(!btnShowLoginForm);
    };

    return (
        <>
            <StHeader>
                <StWrapper>
                    <div className="menu">
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/music"><a>Music</a></Link>
                    </div>

                    <div className="header__right">
                        <StBtnSignin onClick={onclickLoginForm}>Sign in</StBtnSignin>
                        <StBtnSignin onClick={onclickLoginForm}>Sign up</StBtnSignin>
                        {/* <Link href="/profile"><a>Profile</a></Link> */}
                    </div>
                </StWrapper>    
            </StHeader>
            
            { btnShowLoginForm && 
                <PopupLayout > 
                    <LoginForm /> 
                </PopupLayout>
            }

            {children}
        </>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;