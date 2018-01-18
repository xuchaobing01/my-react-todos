import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Routes from './routes';
import store from './store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

const render = () => { ReactDOM.render(<App />, document.getElementById('root')) };

render();
registerServiceWorker();
