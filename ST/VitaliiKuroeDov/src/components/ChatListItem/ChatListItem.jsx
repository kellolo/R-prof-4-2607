import React , { Component, Fragment } from 'react'
import { ListItemIcon, ListItemText, ListItem, Avatar  } from '@material-ui/core'

export default class ChatListItem extends Component {

    render() {
        return(
            <ListItem button>
                <ListItemIcon>
                    <Avatar>{this.props.avatar}</Avatar>
                </ListItemIcon>
                <ListItemText primary={this.props.name} />
            </ListItem>
        )
    }
}