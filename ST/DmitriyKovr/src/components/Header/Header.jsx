import React, {Component} from 'react';
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { addChat } from '../../store/actions/chatActions.js';

class Header extends Component
{
    render() {
        const { chats, chatId } = this.props;
        return (
            <div>
                <h1>Комната: { chats[chatId].title }</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer }) => ({ chats: messageReducer.chats });

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);