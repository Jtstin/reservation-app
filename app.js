'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import searchbar, { SearchBar } from './searchbar'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <SearchBar></SearchBar>
    </div>
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);