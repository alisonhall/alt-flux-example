/* LocationActions.js */

// We create an action by creating a class, the class’ prototype methods will become the actions. The class syntax is completely optional you can use regular constructors and prototypes.

// Inside those actions you can use `this.dispatch` to dispatch your payload through the Dispatcher (Dispatcher is used to broadcast payloads to registered callbacks) and onto the stores. Finally, make sure you export the created actions using `alt.createActions`.

import alt from '../alt';
import LocationSource from '../sources/LocationSource';

class LocationActions {
	updateLocations(locations) { // a function listened to by the LocationStore which saves the values in the store
		return locations;
	}
	
	// We will add an action called fetchLocations which will fetch the locations and then call updateLocations when it successfully completes
	fetchLocations() {
		return (dispatch) => {
			// we dispatch an event here so we can have "loading" state.
			dispatch();
			LocationSource.fetch() // fetch the mock data
			.then((locations) => {
				// we can access other actions within our action through `this.actions`
				this.updateLocations(locations);
			})
			.catch((errorMessage) => {
				this.locationsFailed(errorMessage);
			});
		}
	}
	
	// A new action locationsFailed deals with the locations not being available.
	locationsFailed(errorMessage) {
		return errorMessage;
	}
}

module.exports = alt.createActions(LocationActions);
