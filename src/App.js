import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import LoginPage from './Components/Pages/LoginPage';
import DashboardPage from './Components/Pages/DashboardPage';
import UserRoute from './Components/routes/UserRoute';
import GuestRoute from './Components/routes/GuestRoute'; 
import PropTypes from 'prop-types';

const App = ({location}) => (
	<div className="ui-container">
	 	<Route location={location} path="/" exact component={HomePage}/>
	 	<GuestRoute location={location} path="/login" exact component={LoginPage} />
	 	<UserRoute location={location} path="/dashboard" exact component={DashboardPage} />	 	
	</div>
	);

App.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default App;
