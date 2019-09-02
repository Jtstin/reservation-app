'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';
import SearchBar from './searchbar';
import ReservationForm from './reservationForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
    <header>Reservation App</header>
    <main>
      <ReservationForm></ReservationForm>
    </main>
    <footer></footer>
    </div>);
        
  
  }
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);

