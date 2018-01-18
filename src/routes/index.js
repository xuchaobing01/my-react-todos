import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import App from '../components/App';
import Todos from '../views/todo/list/Todos';
import Todo from '../views/todo/detail/Todo';
import Test from '../views/test/Test';

const history = createBrowserHistory();


const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path="/todos" name="Todos" component={Todos} />
            <Route path="/todo/detail/:id" name="Todo" component={Todo} />
            <Route path="/test" name="Test" component={Test} />
            <Route path="/" name="App" component={App} />
        </Switch>
    </Router>
);

export default Routes;