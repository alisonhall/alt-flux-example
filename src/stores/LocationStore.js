/* LocationStore.js */

// The store is your data warehouse. This is the single source of truth for a particular piece of your application’s state.

import alt from '../alt';
import LocationActions from '../actions/LocationActions';
import FavoritesStore from './FavoritesStore';
import LocationSource from '../sources/LocationSource';

class LocationStore {
	constructor() {
		// Instance variables defined anywhere in the store will become the state. 
		this.state = {
			locations: [],
			errorMessage: null // A new state ‘errorMessage’ is added to deal with a potential error message.
		}

		// bind our action handlers to our actions.
		this.bindListeners({
			handleUpdateLocations: LocationActions.UPDATE_LOCATIONS, // LocationActions is the class from LocationActions.js, UPDATE_LOCATIONS is the function updateLocations in LocationActions
			handleFetchLocations: LocationActions.FETCH_LOCATIONS,
			handleLocationsFailed: LocationActions.LOCATIONS_FAILED,
			integrateFavorites: LocationActions.INTEGRATE_FAVORITES,
			importData: LocationActions.IMPORT_DATA,
			handleFavoriteLocation: LocationActions.FAVORITE_LOCATION,
			handleUnfavoriteLocation: LocationActions.UNFAVORITE_LOCATION
		});



		this.exportPublicMethods({
			getLocation: this.getLocation
		});

		this.exportAsync(LocationSource);
	}

	// We define methods in the store’s prototype that will deal with the actions. These are called action handlers. Stores automatically emit a change event when an action is dispatched through the store and the action handler ends. In order to suppress the change event you can return false from the action handler.
	handleUpdateLocations(locations) {
		// optionally return false to suppress the store change event
		this.setState({
			locations: locations,
			errorMessage: null
		});
	}

	importData() {
		LocationSource.fetch() // fetch the mock data
			.then((locations) => {
				// we can access other actions within our action through `this.actions`
				this.handleUpdateLocations(locations);
				this.integrateFavorites(locations);
			})
			.catch((errorMessage) => {
				this.handleLocationsFailed(errorMessage);
			});
	}

	handleFetchLocations() {
		// reset the array while we're fetching new locations so React can
		// be smart and render a spinner for us since the data is empty.
		this.setState({
			locations: []
		});

		this.importData();
	}

	handleLocationsFailed(errorMessage) {
		this.setState({
			errorMessage: errorMessage
		});
	}

	resetAllFavorites(locations) {
		var editedLocations = [];

		locations.forEach((location) => {
			editedLocations.push({
				id: location.id,
				name: location.name,
				has_favorite: false
			})
		});

		this.setState({
			locations: editedLocations
		});
	}

	integrateFavorites(locations) {
		// this.waitFor(FavoritesStore);
		var allLocations = this.state.locations;
		var favoritedLocations = FavoritesStore.getState().locations;

		this.resetAllFavorites(allLocations);

		favoritedLocations.forEach((location) => {
			// find each location in the array
			for (var i = 0; i < this.state.locations.length; i += 1) {

				// set has_favorite to true
				if (this.state.locations[i].id === location.id) {
					var locations = this.state.locations;
					locations[i].has_favorite = true;
					this.setState({ locations: locations });
					break;
				}
			}
		});
	}

	handleFavoriteLocation(location) {
		var locations = this.state.locations;
		locations[location.id].has_favorite = true;
		this.setState({
			locations: locations
		});
	}

	handleUnfavoriteLocation(location) {
		var locations = this.state.locations;
		locations[location.id].has_favorite = false;
		this.setState({
			locations: locations
		});
	}

	getLocation(id) {
		var { locations } = this.getState();
		for (var i = 0; i < locations.length; i += 1) {
			if (locations[i].id === id) {
				return locations[i];
			}
		}
		return null;
	}
}

export default alt.createStore(LocationStore, 'LocationStore');