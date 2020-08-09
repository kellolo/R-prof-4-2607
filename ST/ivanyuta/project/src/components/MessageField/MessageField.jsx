import React, { Component } from "react";

import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

import Message from "../Message/Message.jsx";

export default class MessageField extends Component {
    state = {
        messages: {},
        text: "",
        answered: true
    };

    constructor(props) {
        super(props);
        this.state.messages = this.props.messages;
    }

    handleSend = () => {
        let { text } = this.state;

        this.sendMessage(text, "Me");
    };

    sendMessage = (text, sender) => {
        let { messages } = this.state;
        this.setState({
            messages: [...messages, { text, sender }],
            text: ""
        });
        if (sender == "Me") {
            this.setState({ answered: false });
        } else {
            this.setState({ answered: true });
        }
    };

    handleChange = event => {
        if (event.keyCode != 13) {
            this.setState({ text: event.target.value });
        } else {
            this.handleSend();
        }
    };

    componentDidUpdate() {
        if (this.state.messages != this.props.messages) {
            this.setState({ messages: this.props.messages });
        }
        if (!this.state.answered) {
            this.sendMessage("Leave me alone", "M'r Robot");
        }
    }

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={index} text={message.text} sender={message.sender} />
        ));

        return (
            <div className="d-flex flex-column justify-content-end h-100">
                {messageElements}
                <div className="w-100 align-self-end">
                    <input type="text" onChange={this.handleChange} />
                    <button onClick={this.handleSend}>
                        Отправить сообщение
                    </button>
                </div>
            </div>
        );
    }
}
