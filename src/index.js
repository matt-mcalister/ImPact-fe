import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LaunchApp from './components/LaunchApp';
import registerServiceWorker from './registerServiceWorker';

// import './stylesheets/avatarSelection.css'
// import './stylesheets/app.css'
import './stylesheets/landingpage/index.css'
import './stylesheets/landingpage/desktop.css'
import './stylesheets/landingpage/thin-wide.css'
import './stylesheets/landingpage/vertical.css'

ReactDOM.render(<div id="wholeApp"><LaunchApp /></div>, document.getElementById('root'));
registerServiceWorker();
