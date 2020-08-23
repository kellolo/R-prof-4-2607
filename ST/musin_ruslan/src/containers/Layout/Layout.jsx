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

    render() {
        return <div className="main">
                    <Header chatId={ this.props.chatId }/>
                    <div className="content">
                        <ChatList chatId={ this.props.chatId }/>
                        <MessageField chatId={ this.props.chatId }/>
                    </div>
            </div>
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);