// The store is your data warehouse. This is the single source of truth for a particular piece of your application’s state.

var alt = require('../alt');
var LocationActions = require('../actions/LocationActions');

class LocationStore {
    constructor() {
        // Instance variables defined anywhere in the store will become the state. 
        this.locations = [];
        this.errorMessage = null; // A new state ‘errorMessage’ is added to deal with a potential error message.

        // bind our action handlers to our actions.
        this.bindListeners({
            handleUpdateLocations: LocationActions.UPDATE_LOCATIONS, // LocationActions is the class from LocationActions.js, updateLocations is the function in LocationActions
            handleFetchLocations: LocationActions.FETCH_LOCATIONS,
            handleLocationsFailed: LocationActions.LOCATIONS_FAILED
        });
    }

    // We define methods in the store’s prototype that will deal with the actions. These are called action handlers. Stores automatically emit a change event when an action is dispatched through the store and the action handler ends. In order to suppress the change event you can return false from the action handler.
    handleUpdateLocations(locations) {
        this.locations = locations;
        // optionally return false to suppress the store change event
        this.errorMessage = null;
    }

    handleFetchLocations() {
        // reset the array while we're fetching new locations so React can
        // be smart and render a spinner for us since the data is empty.
        this.locations = [];
    }

    handleLocationsFailed(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

module.exports = alt.createStore(LocationStore, 'LocationStore');