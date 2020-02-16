import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import { Book } from '../../classes/Book';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      height: "50%"
    }
  }),
);

const book: Book = {
  authors: ["Angus Burroughs"],
  holderEmail: "chad.williams@clickatell.com",
  office: "CAPE_TOWN",
  status: false,
  tags: ["negotiation", "business"],
  title: "Never Split the Difference",
  waitingList: [],
  // image: "https://media.takealot.com/covers_isbn/9781847941497-full.jpg",
  image: "", // TODO sort styling for image sizing
  id: "2345"
}

// Fuck TypeScript's very specific MouseEvent checking, on god
const onClick = (e: {}) => {
  alert("bloo")
}

// todo: make book a parameter
export default function BookTile() {
  const classes = useStyles();

  return (
    
      <GridListTile key={book.id} onClick={onClick}>
            <img src={book.image} alt={book.title} className={classes.img} />
            <GridListTileBar 
              title={book.title}
              subtitle={<span>by: {book.authors}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${book.title}`} >
                  <InfoIcon></InfoIcon>
                </IconButton>
              }
            />

      </GridListTile>
    
  )
}
