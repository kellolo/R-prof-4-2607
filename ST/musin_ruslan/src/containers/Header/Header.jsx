import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import styles from './style.css';

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

const mapStateToProps = ({ messageReducer }) => ({
    chats: messageReducer.chats,
 });

 const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

 export default connect(mapStateToProps, mapDispatchToProps)(Header);