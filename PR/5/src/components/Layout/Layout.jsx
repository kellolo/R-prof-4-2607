import React, { Component } from 'react';

import MessageField from '../MessageField/MessageField.jsx';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';


import PropTypes from 'prop-types';

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.string
    }
    static defaultProps = {
        chatId: '1'
    }

    render() {
        let {chatId} = this.props;
        // console.log(this.props);
        return (
            <div>
                <Header chatId = { chatId }/>
                <div className="d-flex w-100 justify-content-between h-100">
                    <div className="w-25 p-5 border">
                        <ChatList />
                    </div>
                    <div className="w-75 p-5 border">
                        <MessageField />
                    </div>
                </div>
            </div>
        )
    }
}