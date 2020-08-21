import React from "react";
import PropTypes from "prop-types";
import "./style.css"

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    };

    render() {
        return <div
            className="message"
            style={{
                alignSelf: this.props.author === "'robot'" ?
                    "flex-start" : "flex-end",
                backgroundColor: this.props.author === "'robot'" ?
                    "rgb(255, 255, 255)" : "rgb(210, 233, 243)"
            }}
        >
            <div>{this.props.text}</div>
            <div className="message-author">{this.props.author}</div>
        </div>
    }
}