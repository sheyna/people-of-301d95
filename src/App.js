import React from 'react';
import Header from './Header';
import Main from './Main';
import data from './data.json';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main data={data}/>
        <footer>&copy; Code Fellows</footer>
      </>
    );
  }
}

export default App;
