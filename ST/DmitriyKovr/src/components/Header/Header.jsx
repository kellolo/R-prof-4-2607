import React, {Component} from 'react';
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message';
import './style.css';

export default class Header extends Component
{
    render() {
        return (
            <div>
                <h1>Chat room { this.props.chatId }</h1>
            </div>
        )
    }
}