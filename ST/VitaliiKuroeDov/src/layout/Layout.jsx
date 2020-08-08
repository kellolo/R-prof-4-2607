import React , { Fragment } from 'react'
import Header from '../components/Header/Header'

const Layout = (props) => {
    return(
        <Header 
            title={props.title} 
            user={props.user} 
            users={props.users}
            handleNewChat={props.handleNewChat}
            handleNameChange={props.handleNameChange}/>
    )
}

export default Layout