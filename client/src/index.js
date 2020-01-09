import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { Router } from 'react-router-dom'
import history from './history'

import App from './App'
import reducers from './redux/reducers'

import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/" history={history}>
            <App />
        </Router>
    </Provider>, 
    document.querySelector('#root')
)


/**
  Instead of:

    const { NodeMediaServer } = require('node-media-server');
    we need to change the import to this:

    const NodeMediaServer = require('node-media-server');
 */