/* Locations.jsx */

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import AltContainer from 'alt-container';

import alt from './../../alt';
import LocationActions from './../../actions/LocationActions';
import LocationStore from './../../stores/LocationStore';
import FavoritesStore from './../../stores/FavoritesStore';

import LocationsList from './../LocationsList/LocationsList.jsx';
import FavoritesList from './../FavoritesList/FavoritesList.jsx';

// Styles
import './locations.scss';

class Locations extends React.Component {
    render() {
        return (
            <div>
                <h1>Alt-Flux Example 2</h1>
                <Link to={"/"}>Go to Home</Link>
                <h2>All Locations</h2>
                <AltContainer
                    stores={
                        {
                            Locations: LocationStore,
                            Favorites: FavoritesStore
                        }
                    }
                >
                    <LocationsList />
                </AltContainer>

                <h2>Favourites</h2>
                <AltContainer store={FavoritesStore}>
                    <FavoritesList />
                </AltContainer>
            </div>
        );
    }
}

export default Locations;
