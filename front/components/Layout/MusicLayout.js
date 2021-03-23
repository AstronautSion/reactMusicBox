import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import LoginForm from '../From/LoginForm';
import PopupLogin from '../Popup/PopupLogin';
import { useSelector } from 'react-redux';
import { StLoginLayout } from '../../style/components/AppLayout';
import styled from '@emotion/styled';


export const StMusicLayout = styled.div`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:#f50;
	padding-top:50px;
	box-sizing:border-box;
`;

const MusicLayout = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
	const isLoginPopup = useSelector(state => state.user.isLoginPopup);
    
	return (
		<>
			<Header />
			{ isLoginPopup &&  
				<PopupLogin />
			}
      {isLoggedIn 
        ? children 
        : <StLoginLayout>
						<LoginForm/>
					</StLoginLayout>
      }
      
		</>
	);
};

MusicLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MusicLayout;