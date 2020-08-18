import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField/MessageField';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
//import { sendMessage } from '../../store/actions/messageActions.js';

class Layout extends Component
{
    static propTypes = {
        chatId: PropTypes.number,
        //sendMessage: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };
/*
    state = {
        messages: {
            1: { text:'Привет!', sender: 'bot' },
            2: { text:'Как дела?', sender: 'bot' },
        },
    };

    componentDidUpdate(prevProps, prevState)
    {
        const { messages } = this.state;
        
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
           Object.values(messages)[Object.values(messages).length - 1].sender === 'me')
        {
            setTimeout(() => this.sendMessage('Не приставай ко мне, я бот!', 'bot'), 1000);
        }
    }


    sendMessage = (message, sender) => {
        const { messages } = this.state;
        const { chatId } = this.props;
        
        const messageId = Object.keys(messages).length + 1;
        
        this.setState({
            messages: {...messages, 
                [messageId]: {text: message, sender: sender}},
        });
        
        this.props.sendMessage(messageId, message, sender, chatId);
    };
*/
    
    render() {
        const { chatId } = this.props;
        return ([
            <Header key='header' chatId={ chatId } />,
            <div key='Layout' className='row justify-content-around h-75'>
                <div className='col-md-4 border'>
                    <ChatList chatId={ chatId } />
                </div>
                <div className='col-md-7 border'>
                    <MessageField chatId={ chatId } />
                </div>
            </div>
        ])
    }
}

const mapStateToProps = ({}) => ({});

//const mapDispatchToProps = (dispatch) => bindActionCreators({ sendMessage }, dispatch);
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);