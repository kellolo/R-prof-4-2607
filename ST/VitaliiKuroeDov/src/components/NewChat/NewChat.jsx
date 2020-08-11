import React from 'react'
import Draggable from 'react-draggable'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, 
    Paper, InputLabel, FormControl, MenuItem, Select, Slide,
    Avatar } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    profileTitleContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    regButton: {
        margin: '0 1rem 0 0',
    },
    large: {
      width: theme.spacing(17),
      height: theme.spacing(17),
      margin:'0 auto'
    },
  }))
  

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function NewChat(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    // const [avatar, setAvatar] = React.useState(selectedUser.avatar)
    const [selectedUser, setSelectedUser] = React.useState({
        id: '',
        avatar: '',
        name: '',
    })

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setSelectedUser({
            id: '',
            name: '',
            avatar: ''
        })
        setOpen(false)
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            if (selectedUser.id.length > 0 || selectedUser.name.length > 0) {
                handleConfirm()
            }
        }
    }

    const handleConfirm = () => {
        props.handleNewChat(selectedUser)
        setSelectedUser({
            id: '',
            name: '',
            avatar: ''
        })
        handleClose()
    } 

    const user = []
    for (let [key, value] of Object.entries(props.users)){
        user.push(value)
    }

    const handleChange = (event) => {
    
        const searchUser = user.find(item => item.id === event.target.value)
        setSelectedUser({
            id: searchUser.id,
            name: searchUser.name,
            avatar: searchUser.avatar === '' ? `https://i.pravatar.cc/150?img=${selectedUser.id}` : searchUser.avatar
        })
    }
    
  return (
    <div>
        <Button variant="outlined" onClick={handleClickOpen} >Новый чат</Button>
        <Dialog
            open={open}
            fullWidth
            TransitionComponent={Transition}
            onClose={handleClose}
            PaperComponent={PaperComponent}
            aria-labelledby="draggable-dialog-title"
        >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            <div className={classes.profileTitleContainer}>
                Новый чат 
                {/* <Button variant="contained" color="primary" disabled onClick={handleLogOut}>LogOut</Button> */}
            </div>
          
        </DialogTitle>
        <DialogContent onKeyUp={handleKeyUp}>
            <Avatar className="avatar" className={classes.large} src={selectedUser.avatar} />
            <FormControl className={classes.formControl} fullWidth>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                    Select user
                </InputLabel>
                <Select
                    labelId="age-native-label-placeholder"
                    value={selectedUser.id}
                    onChange={handleChange}
                    >
                    {user.map((userItem) => (
                        <MenuItem  key={userItem.id} value={userItem.id}>
                            {userItem.name}
                        </MenuItem >
                    ))}
                </Select>
            </FormControl>
        </DialogContent>
        <DialogActions>
            <Button 
                onClick={handleClose} 
                color="primary"
                variant={selectedUser.name.length > 0 ? "text" : "contained"}>
                Cancel
            </Button>
            <Button 
                autoFocus 
                variant={selectedUser.name.length > 0 ? "contained" : "text"}
                disabled={selectedUser.name.length > 0 ? false : true } 
                onClick={handleConfirm} color="primary">
                Confirm
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}