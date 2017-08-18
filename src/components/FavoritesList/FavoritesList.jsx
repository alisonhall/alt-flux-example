/* Locations.jsx */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import AltContainer from 'alt-container';

import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';
import FavoritesStore from './../../stores/FavoritesStore';

// Styles
import './favoritesList.scss';

class FavoritesList extends React.Component {
    render() {
        if (!this.props.locations) {
            return (
                <div>
                    <img src="./../images/loading-spinner.gif" />
                </div>
            )
        }
        return (
            <ul>
                {this.props.locations.map((location, i) => {
                    return (
                        <li key={i}>{location.name}</li>
                    );
                })}
            </ul>
        )
    }
}

export default FavoritesList;