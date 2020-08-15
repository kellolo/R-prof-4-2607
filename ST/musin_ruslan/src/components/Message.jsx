import React from "react";
import PropTypes from "prop-types";

export default class Message extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        autor: PropTypes.string.isRequired,
    };

    render() {
    return <div>
        { this.props.author }
        { this.props.text }
        </div>
    }
}