import React, { useContext, useState } from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import BookTile from '../book-tile/BookTile';
import { BookContext } from '../../contexts/BookContext';
import { Book } from '../../classes/Book';
import BookModal from '../book-modal/BookModal';

// copied from material-ui site
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "black",
    },
    gridList: {
      width: 500,
      height: 300,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default function BookGridView() {
  const classes = useStyles();

  const books = useContext(BookContext).books;

  // todo need to make this cleaner, possibly put in a context or something
  const [openBook, setOpenBook] = useState<Book>()

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = (book: Book) => {
    setOpenBook(book);
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        
        {Object.values(books).map( (book: Book) => {
          return <BookTile book={book} openModalFunc={openModal}></BookTile>
        })}
        
      </GridList>

      // todo don't like this being here
      <BookModal open={modalOpen} close={closeModal} book={openBook} ></BookModal>
    </div>
  )
}
