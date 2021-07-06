import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Client_details from './containers/Client_details';
import Tradies_list from './containers/Tradies_list';


import Login from './containers/Login';
import SignUp from './containers/SignUp';
import NotFound from './components/NotFound';
import Layout from './hocs/Layout';

import { Provider } from 'react-redux';
import store from './store';

import './sass/main.scss';

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/client_details' component={Client_details} />
                    <Route exact path='/tradies_list' component={Tradies_list} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;