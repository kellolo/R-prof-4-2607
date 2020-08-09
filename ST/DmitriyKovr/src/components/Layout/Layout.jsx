import React, { Component } from 'react';
import MessageField from '../MessageField/MessageField';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';

export default class Layout extends Component {
    render() {
        const chatId = this.props.chatId ? this.props.chatId : '';
        return ([
            <Header key='header' chatId={ chatId } />,
            <div key='Layout' className='d-flex w-100 justify-content-between h-100'>
                <div className='w-25 p-5 border'>
                    <ChatList />
                </div>
                <div className='w-75 p-5 border'>
                    <MessageField />
                </div>
            </div>
        ])
    }
}