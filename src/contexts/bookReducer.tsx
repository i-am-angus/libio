import BooksMap from "../classes/BooksMap"

const initialState: BooksMap = {
  // * this is really just a default for if everything goes wrong,
  // * not sure why the template brought this in
  // TODO make this thing the result of an API call
}

export default (state = initialState, { type, payload } ) => {
  switch (type) {

    // * untested
    case "ADD_BOOK":
      return {
        ...state,
        payload
      }

  default:
    return state
  }
}
