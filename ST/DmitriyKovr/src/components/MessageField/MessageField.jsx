import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { TextField, Fab as FloatingActionButton, CircularProgress } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/messageActions.js';
import { loadChats } from '../../store/actions/chatActions.js';

class MessageField extends Component
{
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        sendMessage: PropTypes.func.isRequired,
        loadChats: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
    }
            
    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'me');
        }
    }

    handleSendMessage = (message, sender) =>
    {
        const { input } = this.state;
        
        if (input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender, this.props.chatId);
        }
            
        if (sender === 'me') {
            this.setState({ input: '' });
        }
    }
    
    componentDidMount() {
        this.props.loadChats();
    }

    render()
    {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        
        const { chatId, messages, chats } = this.props;
        const messageElements = chats[chatId].messageList.map((messageId) => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
        ));
        
        return (
            <div className='layout w-100'>
                <div id='main' className='message-field h-100'>
                    { messageElements }
                </div>
            
                <div style={ { width: '100%', display: 'flex' } }>
                    <TextField
                        name='input'
                        autoFocus
                        fullWidth
                        helperText='Введите сообщение'
                        type='text'
                        style={ { fontSize: '22px' } }
                        onChange={ this.handleChange }
                        value={ this.state.input }
                        onKeyUp = { (event) => this.handleKeyUp(event) }
                    />
                    
                    <FloatingActionButton onClick={ () => this.handleSendMessage(this.state.input, 'me') }>
                        <SendIcon />
                    </FloatingActionButton>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer, chatReducer }) => ({ 
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: chatReducer.isLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage,
    loadChats,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);