import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import { Button } from "semantic-ui-react";

const Style = styled.div`
  .hover {
    &:hover {
      border: solid black 2px;
    }
    width: 180px;
    height: 170px;
    margin-right: 20px;
    border: 0;
  }

  .hover2 {
    &:hover {
      border: solid black 2px;
    }
    width: 180px;
    height: 170px;
    margin-left: 10px;
    border: 0;
  }
`;
const MapList = styled.div`
  box-shadow: 0px 0px 4px #b3b3b3;
  height: 100%;
  overflow: scroll;
  .center {
    display: block;
    margin: 0 auto;
  }
`;

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 30 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 470,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({ onAddQuiz }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onAddQuiz();
    setOpen(false);
  };

  const body = (
    <Style style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Test Knowledge</h2>
      <button onClick={handleClose} className={"hover"}>
        {" "}
        <p>
          <img src="book_images/select.png" alt="profile" />
        </p>{" "}
        Quiz <p> Give players several answer alternatives to choose from </p>
      </button>
      <button onClick={handleClose} className={"hover2"}>
        {" "}
        <p>
          <img src="book_images/bool.png" alt="profile" />
        </p>
        True or False{" "}
        <p>Let players decide if the statement is true or false </p>
      </button>
    </Style>
  );

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        primary
        disableElevation
        className={"center"}
      >
        Add question
      </Button>
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
