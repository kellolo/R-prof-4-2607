import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '1rem',
    right: '2rem',
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

export default function AlertShow(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.popoup.status);
  
  const handleDeleteMessage = () => {
    props.handleDeleteMessage({ id: props.popoup.id, isSelect: props.popoup.isSelect })
  }

  const DeleteButton = props.popoup.type === 'message alert' ?
    <IconButton
      aria-label="delete"
      color="inherit"
      size="small"
      onClick={() => handleDeleteMessage()}
      >
        <DeleteIcon fontSize="inherit" />
    </IconButton> : null
  return (
    <div className={classes.root}>
      <Collapse in={props.popoup.status}>
        <Alert 
          variant="filled" 
          severity="success"
          action={
            <div>
              { DeleteButton }

              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  props.hanldeCloseAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </div>
          }
        > 
          {props.popoup.text}
        </Alert>
      </Collapse>
    </div>
  )
}