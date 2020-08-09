import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout.jsx';


export default class Router extends Component
{
    render() {
        return (
            <Switch>
                <Route path='/' component={ Layout } exact />
                <Route path='/chat/1' render={ () => <Layout chatId='1'/> }/>
                <Route path='/chat/2' render={ () => <Layout chatId='2'/> }/>
                <Route path='/chat/3' render={ () => <Layout chatId='3'/> }/>
                <Route path='/chat/4' render={ () => <Layout chatId='4'/> }/>
            </Switch> 
        )
    }
}