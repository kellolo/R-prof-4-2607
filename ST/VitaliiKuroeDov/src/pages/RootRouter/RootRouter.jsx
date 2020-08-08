import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from '../../components/Profile/Profile'
import Layout from '../../layout/Layout'

const RootRouter = (props) => {
    return (
        <Switch>
            <Route path="/" component={Layout}/>
            <Route path="/profile" component={Profile} />
        </Switch>
    )
}

export default RootRouter