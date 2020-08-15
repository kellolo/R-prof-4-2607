import React, { Component } from 'react';
import Message from '../Message/Message.jsx';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../../store/actions/msg_action';

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
        let id = Object.keys(this.props.messages).length + 1;
        this.props.sendMessage(id, 'Me', text);
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

    componentDidUpdate() {
        // setTimeout(() => {
            // this.sendMessage();
            
        //     if (!this.state.answered) { 
                
        //     }
        // }, 500);
        // }
        if (!this.state.answered) this.sendMessage('Отстань', 'Bot');
    }

    render() {
        console.log(this.props);
        let { messages } = this.props; //{1: {s:, t:}, 2: {}}
                                        //[1, 2]
        let messageElements = Object.keys(messages).map((id) => (
                <Message key={ id } text={ messages[id].text } sender={ messages[id].sender }/>
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

const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);