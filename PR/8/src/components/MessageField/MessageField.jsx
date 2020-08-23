import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { sendMessage, loadMessages } from '../../store/actions/msg_action';

class MessageField extends Component {
    state = {
        // messages: [
        //     {sender: 'Bot', text: 'Hello'},
        //     {sender: 'Bot', text: 'How a u?'},
        // ],
        text: '',
        answered: true
    };

    handleSend = () => {
        let { text } = this.state;
        // this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
        // let s = sender ? sender : 'Bot';
        // let t = text ? text : 'Отстань!';

        // this.sendMessage(text, 'Me');
        
        this.props.sendMessage('Me', text, this.props.chatId);
    };

    // sendMessage = (text, sender) => {
    //     let { messages } = this.state;
    //     this.setState(
    //         { messages: [...messages, { text, sender }], text: '' }
    //     );

    //     if (sender == 'Me') { 
    //         this.setState({ answered: false });
    //     } else {
    //         this.setState({ answered: true });
    //     };
    // }

    handleChange = evt => {
        if (evt.keyCode != 13) {
            this.setState({ text: evt.target.value });
        } else {
            this.handleSend();
        }
    };

    componentDidMount() {
        this.props.loadMessages(this.props.chatId);
    }


    render() {
        // console.log(this.props);
        let { messages } = this.props; //{1: {s:, t:}, 2: {}}
        console.log(messages);                             //[1, 2]
        let messageElements = messages.map((msg) => (
                <Message key={ msg.id } text={ msg.text } sender={ msg.sender }/>
           )
        );

        return  <div>
                    { messageElements }
                    <input 
                        type = "text" 
                        onChange = { this.handleChange }
                    />
                    <button 
                        onClick={ this.handleSend }
                    >Отправить сообщение</button>
                </div>
    }
}

const mapStateToProps = ({ msg_reducer }) => ({
    messages: msg_reducer.messages
})

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage, loadMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);