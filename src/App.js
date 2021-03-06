import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import SignupPage from './Components/Pages/SignupPage';
import DashboardPage from './Components/Pages/DashboardPage';
import ConfirmationPage from './Components/Pages/ConfirmationPage';
import ForgotPasswordPage from './Components/Pages/ForgotPasswordPage';
import ResetPasswordPage from './Components/Pages/ResetPasswordPage';

import UserRoute from './Components/routes/UserRoute';
import GuestRoute from './Components/routes/GuestRoute'; 

import PropTypes from 'prop-types';

const App = ({location}) => (
	<div className="ui-container">
	 	<Route location={location} path="/" exact component={HomePage}/>
	 	<Route location={location} path="/confirmation/:token" exact component={ConfirmationPage} />
	 	<GuestRoute location={location} path="/login" exact component={LoginPage} />
	 	<GuestRoute location={location} path="/signup" exact component={SignupPage} />
	 	<GuestRoute location={location} path="/forgot_password" exact component={ForgotPasswordPage} />
	 	<GuestRoute location={location} path="/reset_password/:token" exact component={ResetPasswordPage} />
	 	<UserRoute location={location} path="/dashboard" exact component={DashboardPage} />	 	
	</div>
	);

App.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default App;
