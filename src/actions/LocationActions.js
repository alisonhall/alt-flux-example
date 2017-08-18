/* LocationActions.js */

// We create an action by creating a class, the class’ prototype methods will become the actions. The class syntax is completely optional you can use regular constructors and prototypes.

// Inside those actions you can use `this.dispatch` to dispatch your payload through the Dispatcher (Dispatcher is used to broadcast payloads to registered callbacks) and onto the stores. Finally, make sure you export the created actions using `alt.createActions`.

import alt from '../alt';
import LocationSource from '../sources/LocationSource';

class LocationActions {
	constructor() {
		this.generateActions(
			'fetchLocations',
			'updateLocations',
			'locationsFailed',
			'fetchFavorites',
			'favoriteLocation',
			'unfavoriteLocation',
			'integrateFavorites',
			'importData'
		);
	}
}

export default alt.createActions(LocationActions);