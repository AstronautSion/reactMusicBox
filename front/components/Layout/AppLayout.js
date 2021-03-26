import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { StSmLayout, StTitleCenter, StWrapper } from '../../style/components/AppLayout';
import { useSelector } from 'react-redux';
import Popup from '../Popup/Popup';
import LoginForm from '../From/LoginForm';


const AppLayout = ({ children }) => {
	const isLoggedIn = useSelector(state => state.user.isLoggedIn);
	const isLoginPopup = useSelector( state => state.user.popup.isLoginPopup);
	return (
		<>
			<Header />
			{ isLoginPopup &&  
				<Popup>
					<LoginForm />
				</Popup>
			}
			<StWrapper>
				{ isLoggedIn ? children :
					<StSmLayout>
						<StTitleCenter>Please Login</StTitleCenter>
						<LoginForm />
					</StSmLayout>
				}
			</StWrapper>
		</>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AppLayout;