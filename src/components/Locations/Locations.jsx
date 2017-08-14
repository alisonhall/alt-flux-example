/* Locations.jsx */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';

// Styles
import './locations.scss';

class Locations extends React.Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this);

        // Getting the state out of your store is simple, every alt store has a method which returns its state. The state is copied over as a value when returned so you accidentally don’t mutate it by reference. 
        this.state = LocationStore.getState();
    }

    //But then we’ll want to listen to changes once the state in the store is updated. In your react component on `componentDidMount` you can add an event handler using `LocationStore.listen`.
    componentDidMount() {
        LocationStore.listen(this.onChange);
        LocationActions.fetchLocations();
    }

    // remove your event listener
    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.state.errorMessage) {
            return (
                <div>Something is wrong</div>
            );
        }

        if (!this.state.locations.length) {
            return (
                <div>
                    <img src="./../images/loading-spinner.gif" />
                </div>
            )
        }

        return (
            <div>
                <Link to={"/"}>Go to Home</Link>
                <ul>
                    {this.state.locations.map((location, i) => {
                        return (
                            <li key={i}>{location.name}</li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Locations;
