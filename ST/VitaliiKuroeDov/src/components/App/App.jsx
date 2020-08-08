import React, { Component, Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../store/store'
import '../../layout/css/style.css'
import ChatList from '../ChatList/ChatList'
import Header from '../Header/Header'
import Chat from '../Chat/Chat'
import { uuid }  from 'uuidv4'

class App extends Component {

    state = {
        title: 'React GB',
        chats: {
            0: {
                id: uuid(),
                name: '1',
                messages: []
            },
            1: {
                id: uuid(),
                name: '1',
                messages: []
            },
            2: {
                id: uuid(),
                name: '2',
                messages: []
            },
            3: {
                id: uuid(),
                name: '3',
                messages: []
            }
        },
        user: {
            firstName: 'Виталий',
            lastName: 'Куроедов',
            email: 'wilde@bk.ru',
            age: '31'
        },
        
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
        for (let [key, value] of Object.entries(this.state.chats)){
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

    render(){
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Header 
                        title={this.state.title} 
                        user={this.state.user} 
                        users={this.state.users}
                        handleNewChat={this.handleNewChat}
                        handleNameChange={this.handleNameChange}/>
                    <main>
                        <Chat/>
                        <ChatList chats={this.state.chats}/>
                    </main>
                </BrowserRouter>
            </Provider>
        )
    }
}
export default App