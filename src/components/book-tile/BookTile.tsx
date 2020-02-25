import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Book } from '../../classes/Book';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      height: "50%",
    },
    tile: {
      // TODO: this doesn't work, looks like the hover doesn't fire
      hover: {
        opacity: ".5",
    }
  }
  }),
);

// const book: Book = {
//   authors: ["Angus Burroughs"],
//   holderEmail: "chad.williams@clickatell.com",
//   office: "CAPE_TOWN",
//   status: false,
//   tags: ["negotiation", "business"],
//   title: "Never Split the Difference",
//   waitingList: [],
//   // image: "https://media.takealot.com/covers_isbn/9781847941497-full.jpg",
//   image: "", // TODO sort styling for image sizing
//   id: "2345"
// }

// Fuck TypeScript's very specific MouseEvent checking, on god
const onClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, openModalFunc: any, book: Book) => {
  openModalFunc(book)
}

export default function BookTile({ book, openModalFunc }: { book: Book, openModalFunc: any }) {
  const classes = useStyles();


  return (
    // TODO: need something here to show when a book is already checked out
      <GridListTile key={book.id} onClick={(e) => {onClick(e, openModalFunc, book)}} className={classes.tile}>
            <img src={book.image} alt={book.title} className={classes.img} />
            <GridListTileBar 
              title={book.title}
              subtitle={<span>by: {book.authors}</span>}
            />

      </GridListTile>
    
  )
}