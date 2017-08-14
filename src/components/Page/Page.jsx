import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

// Components
import Locations from './../Locations/Locations.jsx';

// Styles
import './page.scss';

class Page extends Component {
	constructor() {
        super();
	}
	
	render() {
		return ( 
			<div className = "page-container" >
				<Switch>
					<Route exact path="/" render={() => (
						<div>
							<h1>Home</h1>
							<Link to={"/locations"}>Go to Locations</Link>
						</div>
					)} />
					<Route path="/locations" render={() => (
						<Locations/>
					)} />
					<Route render={() => (
						<div>
							<h1>Error 404: Page Not Found</h1>
						</div>
					)} />
				</Switch>
			</div>
		)
	}
}

export default Page;
