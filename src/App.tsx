import React from 'react';
import './App.css';
import Helmet from 'react-helmet';
import BookGridView from './components/book-grid-view/BookGridView';
import BookProvider from './contexts/BookContext';

function App() {
  return (
    
    <div className="App">
      {/* //* this Helmet thing is the React Friendly way to manipulate <head> properties and such */}
      <Helmet>
        <title>Lib.io</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      

      {/* //TODO: Make seperate component */}
      <header className="App-header">
        <h1>Welcome to Lib.io</h1>
      </header>

      <BookProvider>
        <BookGridView></BookGridView>
      </BookProvider>

    </div>
  );
}

export default App;
