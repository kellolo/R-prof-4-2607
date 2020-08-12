import React from "react";
import PropTypes from "prop-types";

export default class Message extends React.Component {
    static propTypes = {
        sender: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    };

    render() {
        let { sender, text } = this.props;
        return (
            <div
                className="message"
                style={{
                    alignSelf:
                        this.props.sender === "M'r Robot"
                            ? "flex-start"
                            : "flex-end"
                }}
            >
                <strong>{sender}</strong>
                <p> {text} </p>
            </div>
        );
    }
}
