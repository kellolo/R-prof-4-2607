import React, { Component } from "react";

import Header from "../Header/Header.jsx";
import ChatList from "../ChatList/ChatList.jsx";
import MessageField from "../MessageField/MessageField.jsx";

import PropTypes from "prop-types";

export default class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.string
    };
    static defaultProps = {
        chatId: "1"
    };
    state = {
        messages: {
            1: [
                {
                    sender: "M'r Robot",
                    text: "First chat!"
                },
                {
                    sender: "M'r Robot",
                    text: "How are you?"
                }
            ],
            2: [
                {
                    sender: "M'r Robot",
                    text: "Second chat!"
                },
                {
                    sender: "M'r Robot",
                    text: "How are you?"
                }
            ]
        }
    };

    render() {
        let { chatId } = this.props;
        let messages = this.state.messages[chatId];

        return (
            <div className="h-100">
                <Header chatId={chatId} />
                <div className="d-flex w-100 justify-content-between">
                    <div className="w-25 border">
                        <ChatList />
                    </div>
                    <div className="w-75 border">
                        <MessageField messages={messages} />
                    </div>
                </div>
            </div>
        );
    }
}
