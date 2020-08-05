import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Chip, Avatar } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'

export default class Message extends Component {

    handleDelete = () => {
        console.log('dfs')
    }
    
    static propTypes = {
        message: PropTypes.shape({
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })
    }
 
    render() {
        // const message = this.props.message.name === 'я' ? 
        //     <span className="message">{this.props.message.name} : {this.props.message.text}</span> :
        //     <span className="message bot">{this.props.message.name} : {this.props.message.text}</span>
        const message = this.props.message.name === 'я' ?
            <Chip 
                deleteIcon={<DoneIcon />} 
                color="primary" 
                className="me" 
                onDelete={this.handleDelete} 
                label={this.props.message.text}
                avatar={<Avatar>{this.props.message.name}</Avatar>} />:
            <Chip 
                deleteIcon={<DoneIcon />} 
                color="secondary"
                label={this.props.message.text}
                onDelete={this.handleDelete} 
                avatar={<Avatar>{this.props.message.name}</Avatar>} />
        return(
            <div className="message-block"> 
                { message }
            </div>
        )
    }
}

