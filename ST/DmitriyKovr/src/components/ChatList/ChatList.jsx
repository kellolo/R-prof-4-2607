import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemIcon, ListItemText, TextField, Button } from '@material-ui/core';
import { Fab as FloatingActionButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';
import ContactsList from '../ContactsList/ContactsList.jsx';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { addChat } from '../../store/actions/chatActions.js';
import { sendMessage } from '../../store/actions/messageActions.js';

import { push } from 'connected-react-router';

class ChatList extends Component
{
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChat: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        chatId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    state = {
        input: '',
        openDialog: false,
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleAddChat();
        }
    };
    
    handleAddChat = () =>
    {
        const { input } = this.state;
        if (input.length > 0) {
            this.props.addChat(input);
            this.setState({ input: '' });
        }
    }
    
    handleNavigate = (link) => {
        this.props.push(link);
    }
    
    handleClose = (value) => {
        this.setState({ openDialog: false });
        if (value !== '') {
            this.props.addChat(value);
        }
    }
    
    handleOpenContactsList = () => {
        this.setState({ openDialog: true });
    }
    
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <ListItem
                button
                key={ chatId }
                onClick={ () => this.handleNavigate(`/chat/${chatId}`) }
            >
                <ListItemIcon>
                    <SendIcon />
                </ListItemIcon>
                <ListItemText primary={ chats[chatId].title } />
            </ListItem>
        ))
        return (
            <List>
                { chatElements }
                <ListItem
                    button
                    onClick={ () => { this.setState({ openDialog: true }) } }
                >
                    
                </ListItem>
                
                <ListItem
                    key='Add new chat'
                    style={ { height: '60px' } }
                >
                    <FloatingActionButton 
                        color='primary'
                        style={ { outline: 'none' } }
                        onClick={ this.handleOpenContactsList }>
                        <ListItemIcon>
                            <AddIcon style={ { margin: 'auto' } } />
                        </ListItemIcon>
                    </FloatingActionButton>
                    <ContactsList selectedValue={''} open={this.state.openDialog} onClose={ this.handleClose } />
                    
                    
                    <TextField
                        key='textField'
                        name='input'
                        fullWidth
                        placeholder='Добавить новый чат'
                        type='text'
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp={ this.handleKeyUp }
                    />
                </ListItem>
                
            </List>
        )
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    addChat,
    sendMessage,
    push,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);