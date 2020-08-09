import React from 'react';
import PropTypes from 'prop-types';

export default class Message extends React.Component {
   static propTypes = {
       text: PropTypes.string.isRequired,
   };

   render() {
       let { sender, text } = this.props;
       return <div>
           <strong>{ sender }</strong>
                <p>{ text }</p>
           </div>
   }
}
