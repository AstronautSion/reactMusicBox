import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import { StWrapper } from '../../style/components/AppLayout';
import MusicPlayer from './MusicPlayer';
import { useSelector } from 'react-redux';
import PopupLogin from '../PopupLogin';

const AppLayout = ({ children }) => {

	const isLoginPopup = useSelector( state => state.user.isLoginPopup);
	return (
		<>
			<Header />
			{ isLoginPopup &&  
				<PopupLogin />
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