import React, {Component} from 'react';
import { TextField, Fab as FloatingActionButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from '../Message/Message';
import './style.css';

export default class MessageField extends Component
{
    constructor(props) {
        super(props);
    }
    
    state = {
        messages: [
            { text:'Привет!', sender: 'bot' },
            { text:'Как дела?', sender: 'bot' },
        ],
        input: '',
    };

    handleClick = (message) => {
        this.sendMessage(message);
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            this.sendMessage(message);
        }
    }
    
    sendMessage = (message) => {
        this.setState({
            messages: [ ...this.state.messages, {
                text: message,
                sender: 'me',
            }],
            input: '',
        });
    }

    componentDidUpdate()
    {
        const { messages } = this.state;
        
        if (messages[messages.length - 1].sender === 'me') {
            setTimeout(() => this.setState({
                messages: [ ...messages, {
                    text: 'Не приставай ко мне, я робот!',
                    sender: 'bot',
                }]
            }), 1000);
        }
    }

    render()
    {
        const { messages } = this.state;
        const messageElements = messages.map((message, idx) => {
            const props = { ...message, key: idx };
            return ( <Message { ...props } /> );
        });
        
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
                        onKeyUp = { (event) => this.handleKeyUp(event, this.state.input)}
                    />
                    
                    <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                        <SendIcon />
                    </FloatingActionButton>
                    
                </div>
            </div>
        )
    }
}