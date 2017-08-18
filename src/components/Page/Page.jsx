import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import AltContainer from 'alt-container';

import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';
import FavoritesStore from './../../stores/FavoritesStore';

// Components
import Locations from './../Locations/Locations.jsx';
import FavoritesList from './../FavoritesList/FavoritesList.jsx';

// Styles
import './page.scss';

class Page extends Component {
	componentDidMount() {
	    LocationActions.fetchLocations();
	}

	render() {
		return (
			<div className="page-container" >
				<Switch>
					<Route exact path="/" render={() => (
						<div>
							<h1>Alt-Flux Example 2</h1>
							<Link to={"/locations"}>Go to Locations</Link>
							<h2>Favourite Locations</h2>
							<AltContainer store={FavoritesStore}>
								<FavoritesList />
							</AltContainer>
						</div>
					)} />
					<Route path="/locations" render={() => (
						<AltContainer
							stores={
								{
									Locations: LocationStore,
									Favorites: FavoritesStore
								}
							}
						>
							<Locations />
						</AltContainer>
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
