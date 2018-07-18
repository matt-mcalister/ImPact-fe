import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LaunchApp from './components/LaunchApp';
import registerServiceWorker from './registerServiceWorker';
// stylesheets
// import './stylesheets/avatarSelection.css'
import './stylesheets/app.css'

import './stylesheets/footer.css'

import './stylesheets/landingpage/index.css'
import './stylesheets/landingpage/desktop.css'
import './stylesheets/landingpage/thin-wide.css'
import './stylesheets/landingpage/vertical.css'

// redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer, loadingReducer } from "./redux/reducers"


const rootReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render(<div id="wholeApp"><Provider store={store}><LaunchApp /></Provider></div>, document.getElementById('root'));
registerServiceWorker();
