import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import './style.css';

export default class ChatList extends Component
{
    render() {
        return (
            <div>
                <List>
                    <Link to='/chat/1'>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary='Chat 1' />
                        </ListItem>
                    </Link>
                    <Link to='/chat/2'>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary='Chat 2' />
                        </ListItem>
                    </Link>
                    <Link to='/chat/3'>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary='Chat 3' />
                        </ListItem>
                    </Link>
                    <Link to='/chat/4'>
                        <ListItem button>
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary='Chat 4' />
                        </ListItem>
                    </Link>
                </List>
            </div>
        )
    }
}