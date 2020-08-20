import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Countdown from 'react-countdown';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 60 + rand();
  const left = 40 + rand();

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
    textAlign:'center',
  },
}));

export default function SimpleModal({quiz}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [time,setTime] = React.useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTime(0);
  };

  const handleClick = (value) => {
    setTimeout(handleOpen, value * 1000);
    setTime(quiz.time);
    console.log(value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h1>Time Out</h1>
    </div>
  );

  const timeBtn = {
    width:"200px",
    height:"60px",
    border:"none",
    background:"#3f51b5",
    borderRadius:"10px",
    color:"#fff",
    fontSize:"20px",
  }
  const count = {
    marginTop:"20px",
    color:" rgb(76, 175, 80)",
    fontWeight:" bold",
    fontSize:" 30px",
  }

  return (
    <div>
      <p>
        <button type="button" onClick={()=>handleClick(quiz.time)} style={timeBtn}>
          Start Quiz Modal
        </button>
      </p>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {open? <div></div>:<Countdown
          date={Date.now() + Number(time)*1000}
          intervalDelay={0}
          precision={3}
          renderer={
            props => <div style={count}>{props.total/1000}</div>
          }
          onComplete={handleClose}
        /> }
      
    </div>
  );
}