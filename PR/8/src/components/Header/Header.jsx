import React, { Component } from 'react';

export default class Header extends Component { 
    render() {
        console.log(this.props)
        return (
            <div className="w-100">
                <h1>Chat room { this.props.chatId }</h1>
            </div>
        )
    }
}