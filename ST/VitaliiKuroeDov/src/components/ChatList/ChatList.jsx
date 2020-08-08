import React, { Component } from 'react'
<<<<<<< HEAD
import { List } from '@material-ui/core'
import ChatListItem from '../ChatListItem/ChatListItem'
=======
import { ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
>>>>>>> 4a2b3f845a1a602259c97ca8d14606f3bf898d04
export default class ChatList extends Component {

    render() {
        const chatsElemet = []
        for (let [key, value] of Object.entries(this.props.chats)){
            chatsElemet.push(value)
        }

        return(
            <aside className="chat-list">
<<<<<<< HEAD
                <List dense className="">
                    {chatsElemet.map((item, idx) => <ChatListItem key={item.id} {...item} />)}
                </List>
=======
                    <h3>Тут будут чаты</h3>
                <ListItem>
                </ListItem>
>>>>>>> 4a2b3f845a1a602259c97ca8d14606f3bf898d04
            </aside>
        )
    }
}