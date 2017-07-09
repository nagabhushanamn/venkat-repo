import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<App title="React - API"/>, document.getElementById('root'));
registerServiceWorker();
