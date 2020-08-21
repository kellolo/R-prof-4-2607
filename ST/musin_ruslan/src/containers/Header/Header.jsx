import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { withRouter, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import styles from './style.css';
import { addChat } from "../../Actions/chatActions";

class Header extends React.Component {
    static propTypes = {
       chatId: PropTypes.number.isRequired,
       chats: PropTypes.object.isRequired,
   };

    render() {
        const { chats, chatId } = this.props;
        return <div>
             <AppBar
                iconElementRight={ <Link to="/profile/">Profile</Link> }
                title={ chats[chatId].title }
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
        </div>
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });

 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Header);