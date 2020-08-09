import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";

export default class Render extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Layout} exact/>
                <Route path="/chat/1/" render={() => <Layout chatId={"1"} exact/>} />
                <Route path="/chat/2/" render={() => <Layout chatId={"2"} exact/>} />
            </Switch>
        );
    }
}
