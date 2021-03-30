import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { StSmLayout, StTitleCenter, StWrapper } from '../../style/components/AppLayout';
import { useSelector } from 'react-redux';
import Popup from '../Popup/Popup';
import LoginForm from '../From/LoginForm';


const AppLayout = ({ children }) => {
	const me = useSelector(state => state.user.me);
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
				{ me ? children :
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