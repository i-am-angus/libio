import React from 'react'
import { Book } from '../../classes/Book'
import { BookContext } from '../../contexts/BookContext'
// import PropTypes from 'prop-types'

function CheckoutButton({ book, checkoutFunc } : { book: Book, checkoutFunc: any }) {
  
  
  const bookContext = React.useContext(BookContext);



  // todo use checkoutFunc

  const checkoutBook = (book: Book) => {
    // todo makeHttpCall()

    bookContext.dispatch({ type: "CHECKOUT_BOOK", payload: book.id});
  }

  return (
    (book.status)
    ? <button onClick={(e) => checkoutBook(book)}> Check out </button>
    : <button disabled> Checked out by someone </button>
  )
}

CheckoutButton.propTypes = {

}

export default CheckoutButton

