import React, { Component } from 'react'
import { uuid }  from 'uuidv4'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { initStore } from '../../store/store'
import '../../layout/css/style.css'
import ChatList from '../ChatList/ChatList'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import { initChats, sendMessage } from '../../store/actions/chats'


const store = initStore()
store.dispatch(initChats())
store.dispatch(sendMessage(1, 'oleg', 'asdasd1'))
store.dispatch(sendMessage(1, 'oleg', 'asdasd2'))
store.dispatch(sendMessage(1, 'oleg', 'asdasd3'))


class App extends Component {

    state = {
        title: 'React GB',
        // chats: {
        //     0: {
        //         id: uuid(),
        //         name: '1',
        //         messages: [{name: "я", text: "first"}]
        //     },
        //     1: {
        //         id: uuid(),
        //         name: '1',
        //         messages: [{name: "я", text: "second"}]
        //     },
        //     2: {
        //         id: uuid(),
        //         name: '2',
        //         messages: [{name: "я", text: "third"}]
        //     },
        //     3: {
        //         id: uuid(),
        //         name: '3',
        //         messages: [{name: "я", text: "one more"}]
        //     }
        // },
        user: {
            firstName: 'Виталий',
            lastName: 'Куроедов',
            email: 'wilde@bk.ru',
            age: '31'
        },
        currentActiveChat: null,
        currentActiveChatName: null,
        numSelectedChat: 1,
        error: null,

        users: {
            1: {name: 'Михаил', avatar: '', id: uuid()},
            2: {name: 'Игорь', avatar: '', id: uuid()},
            3: {name: 'Света', avatar: '', id: uuid()},
            4: {name: 'Наташа', avatar: '', id: uuid()},
            5: {name: 'Олег', avatar: '', id: uuid()},
            6: {name: 'Антон', avatar: '', id: uuid()},
            7: {name: 'Катя', avatar: '', id: uuid()},
            8: {name: 'Маша', avatar: '', id: uuid()},
            9: {name: 'Петя', avatar: '', id: uuid()},
            10: {name: 'Равиль', avatar: '', id: uuid()},
            11: {name: 'Татьяна', avatar: '', id: uuid()},
            12: {name: 'Настя', avatar: '', id: uuid()},
            13: {name: 'Ира', avatar: '', id: uuid()},
            14: {name: 'Алла', avatar: '', id: uuid()},
            15: {name: 'Анна', avatar: '', id: uuid()},
            16: {name: 'Боря', avatar: '', id: uuid()},
        }
    }

    handleNewChat = (data) => {
        const chatsContainer = []
        for (let [key, value] of Object.entries(this.state.chats)) {
            chatsContainer.push(value)
        }
        const idNewChat = chatsContainer.find(item => item.id === data.id)

        if(!idNewChat) {
            this.setState({
                chats: {
                    ...this.state.chats, 
                    [chatsContainer.length] : {
                        name: data.name,
                        id: data.id,
                        avatar: data.avatar,
                        messages: []
                    }
                }
            })
        } else {
            this.setState({error: 'chat is exists'})
        }
        
    }

    handleNameChange = (data) => {
        this.setState({
            user: {...this.state.user, firstName: data.firstName, lastName: data.lastName}
        })
    }

    handleAddMessage = (content, id) => {
        if (id !== undefined) {
            let idGenerator = 1
            for (let key in this.state.chats ) {
                idGenerator++
            }
            let idChat = this.state.numSelectedChat
            if (this.state.chats[idChat].id === id ) {
                this.setState( {
                    chats: { ...this.state.chats,
                        [idChat] : {
                            ...this.state.chats[idChat],
                            messages: [...this.state.chats[idChat].messages, content]
                        }
                    }
                })
            }
        } 
    }
    
    handleSelectChat = (data) => {
        const chatKey = []
        for (let [key, value] of Object.entries(this.state.chats)) {
            chatKey.push(value)
            if( value.id === data) {
                this.setState({ numSelectedChat: key, currentActiveChatName: value.name })
            }
        }
    }
    
    handleCurrentChatName = (data) => {
        this.setState({currentActiveChat: data})
        this.handleSelectChat(data)
    }

    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Header 
                        title={this.state.title} 
                        user={this.state.user} 
                        chatName={this.state.currentActiveChatName}
                        users={this.state.users}
                        handleNewChat={this.handleNewChat}
                        handleNameChange={this.handleNameChange}/>
                    <main>
                        <Switch>
                            <Route path='/' >
                                <Switch>
                                    <Route path='/' exact render={ (props) => 
                                        <Chat 
                                            {...props}
                                            chats={this.state.chats} 
                                            addMessage={this.handleAddMessage} 
                                            numSelectedChat={this.state.numSelectedChat}
                                            currentActiveChat={this.state.currentActiveChat} />}
                                    />
                                    <Route path='/:id' exact render={(props) => 
                                        <Chat 
                                            {...props}
                                            chats={this.state.chats} 
                                            addMessage={this.handleAddMessage} 
                                            numSelectedChat={this.state.numSelectedChat}
                                            currentActiveChat={this.state.currentActiveChat} />}
                                    />
                                    {/* <Route path='/:id' /> */}
                                </Switch>
                                <ChatList chats={this.state.chats} selectChat={this.handleCurrentChatName}/>
                            </Route>
                        </Switch>
                    </main>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App