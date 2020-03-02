/* Locations.jsx */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import AltContainer from 'alt-container';

import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';
import FavoritesStore from './../../stores/FavoritesStore';

// Styles
import './locationsList.scss';

class LocationsList extends React.Component {
    constructor(props) {
        super(props);
        this.toggleFavorite = this.toggleFavorite.bind(this);
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
    }

    toggleFavorite(event) {
        if(event.target.checked) {
            this.addFavorite(event);
        } else {
            this.removeFavorite(event);
        }
    }

    addFavorite(event) {
        var location = LocationStore.getLocation(
            Number(event.target.getAttribute('data-id'))
        );
        LocationActions.favoriteLocation(location);
    }

    removeFavorite(event) {
        var location = LocationStore.getLocation(
            Number(event.target.getAttribute('data-id'))
        );
        LocationActions.unfavoriteLocation(location);
    }

    render() {
        if (this.props.Locations.errorMessage) {
            return (
                <div>
                    <p>Error: {this.props.Locations.errorMessage.message}</p>
                    <p>{this.props.Locations.errorMessage.stack}</p>
                </div>
            );
        }

        if (this.props.Locations.loading) {
            return (
                <div>
                    <img src="./../images/loading-spinner.gif" />
                </div>
            )
        }
        
        return (
            <ul>
                {this.props.Locations.locations.map((location, i) => {
                    console.log(location, i);
                    return (
                        <li key={i}>
                            <input type="checkbox" checked={location.has_favorite} onChange={this.toggleFavorite} data-id={location.id}/>
                            {location.name}
                        </li>
                    );
                })}
            </ul>
        )
    }
}

export default LocationsList;