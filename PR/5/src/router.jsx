import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path = '/' component = { Layout } exact/> {/*только для http://localhost:3000/*/} 
                <Route path = '/chat/1/' render = { () => <Layout chatId = { '1' } /> } />
                <Route path = '/chat/2/' render = { () => <Layout chatId = { '2' } /> } />
            </Switch>
        )
    }
}