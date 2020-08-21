import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../Layout/Layout"
import Profile from "../Profile/Profile"

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact={ true } path="/" component={ Layout } />
                <Route exact path="/profile/" render={ () => <Profile /> } />
                <Route
                    exact
                    path="/chat/:chatId/"
                    render={ obj => <Layout
                        chatId={ Number(obj.match.params.chatId) }
                        />
                        }
                    />
            </Switch>
        )
    }
}