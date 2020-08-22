import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendRounded  from '@material-ui/icons/SendRounded';
// import Message from '../Message/Message.jsx';

export default class ChatList extends Component {
    render() {
        return (
            <List>
                <Link to = '/chat/1/'>
                    <ListItem 
                        button = { true }
                    >Chat 1</ListItem>
                </Link>

                <Link to = '/chat/2/'>
                    <ListItem 
                        button = { true }
                    >Chat 2</ListItem>
                </Link>
            </List>
        )
    }
}