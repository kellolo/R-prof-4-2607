import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import { Link } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";

export default class ChatList extends Component {
    render() {
        return (
            <List subheader={<ListSubheader>Recent chats</ListSubheader>}>
                    <ListItem button component={Link} to="/chat/1/">
                        <ListItemAvatar>
                            <Avatar>FP</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="First Person"
                            secondary="Jan 9, 2014"
                        />
                    </ListItem>
                <ListItem button component={Link} to="/chat/2/">
                    <ListItemAvatar>
                        <Avatar>SP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Second Person"
                        secondary="Jan 9, 2014"
                    />
                </ListItem>
            </List>
        );
    }
}
