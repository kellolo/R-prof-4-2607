import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    static propTypes = {
        sender: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }

    render() {
        return <div
            className="message"
            style={ {alignSelf: this.props.sender=== "M'r Robot" ?
                'flex-start': 'flex-end' } }
        >
            <div>{this.props.text}</div>
            <div className="message-sender"> { this.props.sender} </div>
        </div>
    }
}
