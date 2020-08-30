import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField/MessageField';
import ChatList from '../ChatList/ChatList.jsx';
import Header from '../Header/Header.jsx';
import './style.css';

import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';

class Layout extends Component
{
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        const { chatId } = this.props;
        return ([
            <Header key='header' chatId={ chatId } />,
            <div key='Layout' className='row justify-content-around h-75'>
                <div className='col-md-4 border'>
                    <ChatList chatId={ chatId } />
                </div>
                <div className='col-md-7 border'>
                    <MessageField chatId={ chatId } />
                </div>
            </div>
        ])
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);