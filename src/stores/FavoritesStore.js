/* FavouritesStore.js */

import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class FavoritesStore {
	constructor() {
		this.state = {
			locations: [{ id: 0, name: 'Abu Dhabi', has_favorite: true }]
		}

		this.bindListeners({
			addFavoriteLocation: LocationActions.FAVORITE_LOCATION,
			removeFavoriteLocation: LocationActions.UNFAVORITE_LOCATION,
			handleFetchFavorites: LocationActions.FETCH_FAVORITES
		});
	}

	handleFetchFavorites() {
		// reset the array while we're fetching new locations so React can
		// be smart and render a spinner for us since the data is empty.
		this.setState({
			locations: []
		});
	}

	addFavoriteLocation(location) {
		var locations = this.state.locations;
		locations.push(location);
		this.setState({
			locations: locations
		});
	}

	removeFavoriteLocation(location) {
		var locations = this.state.locations;
		var index = locations.findIndex(i => i.id == location.id);
		locations.splice(index, 1);
		this.setState({
			locations: locations
		});
	}
}

export default alt.createStore(FavoritesStore, 'FavoritesStore');