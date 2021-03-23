import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { StWrapper } from '../../style/components/AppLayout';
import MusicPlayer from './MusicPlayer';
import { useSelector } from 'react-redux';
import Popup from '../Popup/Popup';
import LoginForm from '../From/LoginForm';


const AppLayout = ({ children }) => {

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
				{children}
			</StWrapper>
			<MusicPlayer />
		</>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AppLayout;