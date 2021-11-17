import React, { Component } from 'react';
import Button from './components/Button/Button';

class App extends React.Component {
  counter=0;

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="App">
      counter: {this.counter}<br/>
      <Button text="Soustraire 1" onButtonClicked={ () => {} } bgColor="tomato"></Button>
      <Button text="Ajouter 1" onButtonClicked={ () => {} } bgColor="green"></Button>
    </div>;
  }
}

export default App;
