import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import LoginForm from '../From/LoginForm';
import { useSelector } from 'react-redux';
import PopupLogin from '../PopupLogin';
import { StLoginLayout } from '../../style/components/AppLayout';

const AppLayout = ({ children }) => {
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
        : <StLoginLayout><LoginForm/></StLoginLayout>
      }
      
		</>
	);
};

AppLayout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default AppLayout;