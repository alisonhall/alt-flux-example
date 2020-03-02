// var Rebase = require('re-base');

// var base = Rebase.createClass({
// 	apiKey: "AIzaSyCsgLq79fYddJzwQeEN8Tryzw91_T47s-c",
// 	authDomain: "mock-data-7c200.firebaseapp.com",
// 	databaseURL: "https://mock-data-7c200.firebaseio.com",
// 	storageBucket: "mock-data-7c200.appspot.com"
// });

// export default base;


import Rebase from 're-base';
import firebase from 'firebase';
// import firebase from 'firebase/app';
// import database from 'firebase/database';

var app = firebase.initializeApp({
	apiKey: "AIzaSyCsgLq79fYddJzwQeEN8Tryzw91_T47s-c",
	authDomain: "mock-data-7c200.firebaseapp.com",
	databaseURL: "https://mock-data-7c200.firebaseio.com",
	projectId: "mock-data-7c200"
});

// var db = database(app);
var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;