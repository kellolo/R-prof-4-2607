import React, {Component} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, ButtonGroup } from '@material-ui/core' 
import Profile from '../Profile/Profile'
import NewChat from '../NewChat/NewChat'
export default class Header extends Component {
    render() {
        return(
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Profile user={this.props.user} handleNameChange={this.props.handleNameChange}/>
                    <Typography variant="h6" >
                        {this.props.title}
                    </Typography>
                    <ButtonGroup className="button-group" variant="contained">
                        <Button variant="outlined">Чаты</Button>
                        <NewChat user={this.props.user} users={this.props.users} handleNewChat={this.props.handleNewChat}/>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
        )
    }
}