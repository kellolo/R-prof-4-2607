import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

export default class Message extends Component {

    state = {
        isSelectMessage: false,
    }

    handleDelete = () => {
        this.setState({isSelectMessage: !this.state.isSelectMessage})

        this.props.handleAlert(
            `выбрано сообщение ${this.props.message.name} : ${this.props.message.text}`, 
            'message alert',
            { id: this.props.message.id, isSelect: false, status: !this.state.isSelectMessage }
        )
    }
    
    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    }
 
    render() {
        const message = this.props.message.name === 'я' ?
            <Chip 
                deleteIcon={<DoneIcon />} 
                color="primary" 
                className="me" 
                clicable
                onDelete={this.handleDelete} 
                label={this.props.message.text}
                avatar={<Avatar>{this.props.message.name}</Avatar>} />:
            <Chip 
                deleteIcon={<DoneIcon />} 
                color="secondary"
                clicable
                label={this.props.message.text}
                onDelete={this.handleDelete} 
                avatar={<Avatar src={`https://i.pravatar.cc/150?img=${this.props.avatar}`}></Avatar>} />
        return(
            <div className="message-block"> 
                { message }
            </div>
        )
    }
}

