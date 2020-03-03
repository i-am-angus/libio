import React, { createContext, useReducer } from 'react';

import bookReducer from './bookReducer';
import BooksMap from '../classes/BooksMap';


interface IContextProps {
  books: BooksMap;
  dispatch: ({ type, payload }:{type:string, payload: any}) => void;
}
export const BookContext = createContext({} as IContextProps);

const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, {
    "UUID1": {
      authors: ["Angus Burroughs"],
      holderEmail: "chad.williams@clickatell.com",
      office: "CAPE_TOWN",
      status: true,
      tags: ["negotiation", "business"],
      title: "Never Split the Difference",
      waitingList: [],
      image: "",
      id: "UUID1"
    },
    "UUID2": {
      authors: ["Sam Beckbessinger"],
      holderEmail: "",
      office: "CAPE_TOWN",
      status: false,
      tags: ["personal finance", "budgetting", "millienial"],
      title: "Manage your Money like a F*cking Grownup",
      waitingList: [],
      image: "",
      id: "UUID2"
    },
  });

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider;
