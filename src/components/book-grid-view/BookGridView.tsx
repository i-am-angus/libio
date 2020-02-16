import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { GridList } from '@material-ui/core';
import BookTile from '../book-tile/BookTile';

// copied from material-ui site
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
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

// const tileData = [
//   {
//     img: "",
//     title: 'Wan',
//     author: 'Angus Burroughs'
//   },
//   {
//     img: "",
//     title: 'Too',
//     author: "John Johnson"
//   }
// ]

export default function BookGridView() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        
          <BookTile></BookTile>
          <BookTile></BookTile>
        
      </GridList>
    </div>
  )
}
