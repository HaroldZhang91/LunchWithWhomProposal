import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import './styles/font-awesome/css/font-awesome.css';
import Footer from './components/Footer.js';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
