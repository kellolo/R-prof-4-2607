import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

class Header extends Component
{
    static propTypes = {
        chats: PropTypes.object.isRequired,
        chatId: PropTypes.number.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    render() {
        const { chats, chatId, isLoading } = this.props;
        let chatRoom = '???';
        if (!isLoading) {
            chatRoom = chats[chatId].title;
        }
            
        return (
            <div>
                <h1>Комната: { chatRoom }</h1>
            </div>
        )
    }
}

const mapStateToProps = ({ chatReducer }) => ({ 
    chats: chatReducer.chats,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);