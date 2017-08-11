import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// Components
import Page from './components/Page/Page.jsx';

// Styles
import './styles/normalize.css';

ReactDOM.render(
  <Router>
    <Page />
  </Router>
  , document.getElementById('react-page')
);
