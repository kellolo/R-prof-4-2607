import React, { Component } from "react";
import { List, ListItem } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Avatar from "@material-ui/core/Avatar";

class ChatList extends Component {
    render() {
        const { chats } = this.props;
        const listItems = Object.keys(chats).map(id => {
            const chat = chats[id];
            const to = "/chat/" + chat.id + "/";
            return (
                <ListItem key={id} button component={Link} to={to}>
                    <ListItemAvatar>
                        <Avatar>FP</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.title}
                        secondary={chat.person}
                    />
                </ListItem>
            );
        });
        return (
            <List subheader={<ListSubheader>Recent chats</ListSubheader>}>
                {listItems}
            </List>
        );
    }
}

const mapStateToProps = ({ chat_reducer }) => ({
    chats: chat_reducer.chats
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
