import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Book } from "../../classes/Book";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  })
);

function checkoutButtonClick(e :any, book: Book) {
  alert(`Checkout button clicked for book: ${book.title}`)
}

function statusBox(book: Book) {

  return book.status ? (<span>Currently checked out by {book.holderEmail}</span>)
                     : (<button onClick={(e) => {checkoutButtonClick(e, book)}}> Check out </button>)

}

export default function BookModal({open, close, book}: {open: any, close: any, book: Book}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  // * dunno if this is a hack :shrug-emoji:
  if (open) {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={close}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{book.title}</h2>
          
          <div>Image goes here</div>
          <br />
          <span>Title: {book.title}</span>
          <br></br>
          <span>Author: {book.authors}</span>
          <br></br>
          <span>Tags: {book.tags}</span>
          <br></br>
          {statusBox(book)}

        </div>
      </Modal>
    );
  } else {
    return (<div></div>)
  }

  
}
