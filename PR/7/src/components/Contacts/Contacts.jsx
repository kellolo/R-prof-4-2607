// import React, { Component } from 'react';
// import { Modal } from '@material-ui/core';
// export default class Contacts extends Component { 
//     handleOpen = () => {
//         setOpen(true);
//     }
    
//     handleClose = () => {
//         setOpen(false);
//     }

//     render() {
//         // const [modalStyle] = React.useState(getModalStyle);
//         // const [open, setOpen] = React.useState(false);
//         let body = ''
//         return (
//             <div>
//                 <button type="button" onClick={this.handleOpen}>
//                     Open Modal
//                 </button>
//                 <Modal
//                     open={true}
//                     onClose={this.handleClose}
//                     aria-labelledby="simple-modal-title"
//                     aria-describedby="simple-modal-description"
//                 >
//                     {body}
//                 </Modal>
//             </div>
//         )
//     }
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
        <div>
            Список контактов
        </div>
    // <div style={modalStyle} className={classes.paper}>
    //   <h2 id="simple-modal-title">Text in a modal</h2>
    //   <p id="simple-modal-description">
    //     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    //   </p>
    //   <SimpleModal />
    // </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        CONTACTS
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
