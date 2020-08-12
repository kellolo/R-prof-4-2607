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
    render() {
        let { chatId } = this.props;

        return (
            <div className="h-100">
                <Header chatId={chatId} />
                <div className="d-flex w-100 justify-content-between">
                    <div className="w-25 border">
                        <ChatList />
                    </div>
                    <div className="w-75 border">
                        <MessageField chatId= {chatId} />
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps = ({ chat_reducer }) => ({
//     messages: msg_reducer.messages
// });

// const mapDispatchToProps = dispatch =>
//     bindActionCreators({ sendMessage }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);
