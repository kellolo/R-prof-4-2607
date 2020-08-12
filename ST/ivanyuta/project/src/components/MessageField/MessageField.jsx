import React, { Component } from "react";

import Message from "../Message/Message.jsx";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { sendMessage } from "../../store/actions/msg_action";


class MessageField extends Component {
    state = {
        text: "",
        answered: true
    };

    constructor(props) {
        super(props);
        this.state.messages = this.props.messages;
    }


    handleSend = () => {
        let { text } = this.state; const id = Object.keys(this.props.messages).length + 1;
        this.props.sendMessage(this.props.chatId, id, 'Me', text);
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
    }

    render() {
        let { messages } = this.props;

        const messageElements = Object.keys(messages).map(id => (
            <Message
                key={id}
                text={messages[id].text}
                sender={messages[id].sender}
            />
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

const mapStateToProps = ({ msg_reducer }, ownProps ) =>  {
    const { chatId } = ownProps;
    const  messages = msg_reducer.getChatMessages(chatId);
    return ({
        messages:  messages,

    });
} ;

const mapDispatchToProps = dispatch =>
    bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);
