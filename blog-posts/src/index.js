import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom'
import App from './components/app';
import reducers from './reducers'
import thunk from 'redux-thunk';

ReactDOM.render(
    <Provider store= {createStore(reducers, applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);
