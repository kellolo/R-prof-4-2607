import React from "react";
import PropTypes from "prop-types";
import MessageField from "../MessageField/MessageField"
import ChatList from "../ChatList/ChatList"
import Header from "../Header/Header"
import "./style.css"

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return <div className="main">
                    <Header chatId={ this.props.chatId } chat="Chat "/>
                    <div className="content">
                        <ChatList/>
                        <MessageField chatId={ this.props.chatId } />
                    </div>
            </div>
    }
}