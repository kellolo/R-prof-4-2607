import React, { Component } from 'react'
import Message from '../Message/Message'
import { Paper, Button, IconButton, TextField, Typography } from '@material-ui/core' 
import SendIcon  from '@material-ui/icons/SendRounded'
import { connect } from 'react-redux'

import { getChatsSuccess } from '../../store/actions/chats'
import { uuid } from 'uuidv4'
class Chat extends Component {

    state = {
        input: '',
        messages: []
    }

    handleSendMessage = (value) => {
        const { id } = this.props.match.params
        this.setState(state => ({
            ...state,
            messages: [...this.state.messages, {name: 'я', text: value} ]
        }))
        this.setState({input: ''})
        this.props.addMessage({name: 'я', text: value, id: uuid()}, id)
    }

    handleClick = (value) => {
        if (this.state.input !== '') {
            this.handleSendMessage(value)
        }
    }

    handleKeyUp = (event) => {
        if (this.state.input !== '') {
            if (event.keyCode === 13){
                this.handleSendMessage(this.state.input)
            }    
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value})
    }

    componentDidUpdate(prevProps, prevState) {
        const { id } = this.props.match.params
        const currentMessage = this.state.messages
        const lastMessage = currentMessage[currentMessage.length -1]

        if(prevState.messages.length < this.state.messages.length && lastMessage.name === 'я'){
            setTimeout(() => {
                this.setState(state => ({
                    ...state,
                    messages: [...this.state.messages, {name: 'Бот', text: `Бот компот`} ]
                }),
                    this.props.addMessage({name: 'Бот', text: "боткомпот", id: uuid()}, id)

                )
            }, 1000)      
        }
    }

    render() {
        const { chat } = this.props
        console.log(chat, 'asdasd')
        // console.log(this.props, 'props', this.props.numSelectedChat)

        const { id }  = this.props.match.params
        let Messages = <Typography>No Chats</Typography>

        const currentChat = this.props.chats[this.props.numSelectedChat].messages 
        if (id !== undefined && this.props.chats) {
            Messages = this.props.chats[this.props.numSelectedChat].messages.map( (item, index) => <Message key={index} message={item} />)
        }

        return(
            <section className="chat">
                <div className="message-list">
                    { Messages }
                </div>
                <div className="chat-footer">
                    <TextField 
                        disabled={id === undefined ? true : false}
                        autoFocus
                        fullWidth
                        size="small"
                        label="введи текст"
                        variant="outlined"
                        value={this.state.input} 
                        onChange={this.handleChange} 
                        onKeyUp={(event) => this.handleKeyUp(event, this.state.input)}/>

                    <IconButton
                        disabled={id === undefined ? true : false}
                        color="primary" 
                        onClick={() => this.handleClick(this.state.input)}>
                            <SendIcon/>
                    </IconButton>
                </div>
            </section>
        )
    }
}

const mapStateProps = store => {
    chat: store.chats
    // const { id } = props.match.params
    
    // const chat = id && store.chats && store.chats.chats[idChat] ? store.chats.chats[idChat] : undefined

    // return {
    //     messages: chat ? chat.messages : undefined,
    //     chats: chat
    // }
}
// const mapDispatchToProps = {
//     getChats: getChatsSuccess,
// }
export default connect(mapStateProps)(Chat)