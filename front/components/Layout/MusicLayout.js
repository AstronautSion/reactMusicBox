import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import LoginForm from '../From/LoginForm';
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux';
import { StSmLayout } from '../../style/components/AppLayout';
import styled from 'styled-components';


export const StMusicLayout = styled.div`
	position:absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background-color:#5f56e0;
	padding-top:50px;
	box-sizing:border-box;
`;

const MusicLayout = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
	const isLoginPopup = useSelector(state => state.user.popup.isLoginPopup);
    
	return (
		<>
			<Header />
			{ isLoginPopup &&  
				<Popup>
					<LoginForm />
				</Popup>
			}
      {isLoggedIn 
        ? children 
        : <StSmLayout>
						<LoginForm/>
					</StSmLayout>
      }
      
		</>
	);
};

MusicLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default MusicLayout;