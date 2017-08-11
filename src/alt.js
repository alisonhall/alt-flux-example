// creating an instance of alt, this instantiates a Flux dispatcher (Dispatcher is used to broadcast payloads to registered callbacks) for you and gives you methods to create your actions and stores.

var Alt = require('alt');
var alt = new Alt();

module.exports = alt;