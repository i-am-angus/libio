export interface Book {
  title: string
  authors: Array<string>
  holderName?: string // should be able to extract this from the email
  holderEmail: string
  status: boolean // AKA checkedOut? TODO: change to enum, right now might
  waitingList: Array<string> // user emails go here
  office: string // TODO: make enum with CAPE_TOWN, LAGOS, TORONTO, SAN_FRANCISCO as values
  tags: Array<string>,
  image?: string,
  id: string
}