import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 0,
    right: '2rem',
    width: '40%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertShow(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(props.popoup.status);
  
  return (
    <div className={classes.root}>
      <Collapse in={props.popoup.status}>
        <Alert
          action={
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
          }
        >
          {props.popoup.text}
        </Alert>
      </Collapse>
    </div>
  );
}