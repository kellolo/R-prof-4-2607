import React, { Component } from 'react'
import { ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
export default class ChatList extends Component {

    render() {
        return(
            <aside className="chat-list">
                    <h3>Тут будут чаты</h3>
                <ListItem>
                </ListItem>
            </aside>
        )
    }
}