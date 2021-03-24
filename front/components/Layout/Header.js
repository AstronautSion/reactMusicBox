import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { StAccountMenu, StBtnSignin, StButtonSm, StHeader, StMenuUl } from '../../style/components/Header';
import { StWrapper } from '../../style/components/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction, popupOpen } from '../../reducers/user';

const Header = () => {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
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
		dispatch(popupOpen({
			key:'isLoginPopup',
			value: null,
		}));
	},[]);

	const onClickLogout = useCallback(() => {
		dispatch(logoutAction);
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
};

export default Header;