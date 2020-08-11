import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { List } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
class ChatList extends Component {

    render() {
        const chatsElemet = []
        for (let [key, value] of Object.entries(this.props.chats)) {
            chatsElemet.push(value)
        }

        return(
            <aside className="chat-list">
                <List dense className="">
                    {chatsElemet.map((item) => 
                        <ChatListItem 
                            key={item.id} 
                            {...item} 
                            selectChat={this.props.selectChat} 
                            selected={this.props.currentActiveChat}/>
                    )}
                </List>
            </aside>
        )
    }
}

export default ChatList