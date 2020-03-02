import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import AltContainer from 'alt-container';
import firebase from 'firebase';


import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';
import FavoritesStore from './../../stores/FavoritesStore';
// import base from './../../base.js';

// Components
import Locations from './../Locations/Locations.jsx';
import FavoritesList from './../FavoritesList/FavoritesList.jsx';

// Styles
import './page.scss';


class Page extends Component {
	// componentDidMount() {
	//     LocationActions.fetchLocations();
	// }
	
	componentWillMount() {
		// this runs right before the <Page> is rendered
		console.log("Loading data...");

		// this.getInitialData();
		// LocationActions.setupSyncState();
		// LocationActions.importData();
		LocationActions.fetchLocations();

		// if(categoryDataLoaded && topCategoryDataLoaded && commentDataLoaded && exampleDataLoaded && languageDataLoaded && selectedLanguagesDataLoaded && userDataLoaded) {
		// 	this.setState({ allDataLoaded: true });
		// 	console.log("componentWillMount() END");
		// }

		// console.log(this.refCategories);

		// check if there is any order in localStorage
		// const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

		// if (localStorageRef) {
		// 	// update our App component's order state
		// 	this.setState({
		// 		order: JSON.parse(localStorageRef)
		// 	});
		// }

	}

	// componentWillUnmount() {
	// 	base.removeBinding(this.refCategories);
	// }

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
