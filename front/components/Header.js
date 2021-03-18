import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { StWrapper } from "../style/components/AppLayout";
import { StAccountMenu, StBtnSignin, StButtonSm, StHeader, StMenuUl } from '../style/components/Header';
import PropTypes from 'prop-types';

const Header = ({isLoggedIn, setIsLoggedIn, showPopup, setShowPopup}) => {

    const [accountMenu, setAccountMenu] = useState(true);
    const accountMenuRef = useRef();

    const onClickBtnMenu = () => {
        if(accountMenu){
            accountMenuRef.current.style.opacity = 1;
            accountMenuRef.current.style.top = '100%';
            accountMenuRef.current.style.visibility = "visible";
        }else{
            accountMenuRef.current.style.opacity = 0;
            accountMenuRef.current.style.top = '70%';
            accountMenuRef.current.style.visibility = "hidden";
        }
        setAccountMenu(!accountMenu);
    }
    
    const onclickLoginForm = useCallback(() => {
        setShowPopup(!showPopup);
    },[]);

    const onClickLogout = useCallback(() => {
        setIsLoggedIn(false);
    },[]);

    return (
        <StHeader>
            <StWrapper>
                <div className="menu">
                    <Link href="/"><a>Home</a></Link>
                    <Link href="/music"><a>Music</a></Link>
                </div>
                <div className="header__right">
                    {isLoggedIn ? 
                        <>
                            <StAccountMenu>
                                <span onClick={onClickBtnMenu}>Astronaut.sion</span>
                                <StMenuUl ref={accountMenuRef}>
                                    <li><Link href="/profile"><a rel="noreferrer noopener">Profile</a></Link></li>
                                    <li><Link href="/likes"><a rel="noreferrer noopener">Likes</a></Link></li>
                                    <li><Link href="/following"><a rel="noreferrer noopener">Following</a></Link></li>
                                    <li><Link href="/follower"><a rel="noreferrer noopener">Who to follow</a></Link></li>
                                </StMenuUl>
                            </StAccountMenu>
                             
                            <StButtonSm onClick={onClickLogout}>Logout</StButtonSm>
               
                        </>
                        : 
                        <>
                            <StBtnSignin onClick={onclickLoginForm}>Sign in</StBtnSignin>
                            <StBtnSignin stOrange onClick={onclickLoginForm}>Create account</StBtnSignin>
                        </>
                    }
                </div>

                
            </StWrapper>
        </StHeader>
    );
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    showPopup: PropTypes.bool.isRequired,
    setIsLoggedIn: PropTypes.func.isRequired,
    setShowPopup: PropTypes.func.isRequired,
}

export default Header;