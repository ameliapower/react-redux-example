import React from 'react';
import {render} from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import C from './constants'
import ABzProducts from './store/reducers'
// import api from './middleware/api'
import {callApiMiddleware} from './middleware'



let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, callApiMiddleware)(
    createStore
)

let store = createStoreWithMiddleware(
    ABzProducts,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
