import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import MessageField from "../MessageField/MessageField";
import ChatList from "../ChatList/ChatList";
import Header from "../Header/Header";
import "./style.css";

class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        input: "",
    };

    // componentDidUpdate(prevProps, prevState) {
    //     const {messages} = this.state;
    //     if (Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1].author === "'mr7282'") {
    //         setTimeout(() =>
    //         this.sendMessage("Don't touch me! I'm robot", "'robot'"), 1000);

    //     }
    // };

    render() {
        return <div className="main">
                    <Header chatId={ this.props.chatId }/>
                    <div className="content">
                        <ChatList />
                        <MessageField chatId={ this.props.chatId }/>
                    </div>
            </div>
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);