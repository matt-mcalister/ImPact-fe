import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './stylesheets/avatarSelection.css'
import './stylesheets/app.css'
import './stylesheets/landingPage.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
