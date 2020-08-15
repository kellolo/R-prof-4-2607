import React from "react";
import Message from "./Message";


export default class MessageField extends React.Component {
    state = {
        messages: [
            {author: "'mr7282 '  ", text: " Hello!"},
            {author: "'mr7282 '  ", text: " How are you?"},
            ],
    };

    handleClick = () => {
        this.setState({messages: [ ...this.state.messages, {author: "'mr7282'  ", text: " Do you are listen me?"}]});
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => this.setState(
                {messages: [ ...this.state.messages, {author: "'robot  '  ",  text: "Don't touch me " +  this.state.messages[this.state.messages.length-1].author + "! I am robot!"}]}
            ), 1000);

        }
    }

    render() {
        const messageElements = this.state.messages.map((text) => (
            <Message text={ text.text } author={ text.author } />
        ));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Send message</button>
        </div>
    }
}