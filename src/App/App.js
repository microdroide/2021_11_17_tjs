import React, { Component } from 'react';
import Button from './components/Button/Button';

class App extends React.Component {
  counter = 0;

  constructor(props) {
    super(props);
    this.state = { counter: 0, value2: 0 };
  }

  componentDidUpdate(){
    console.log(arguments);
    console.log('le changement est pret et effectif', this.state.counter);
  }

  render() {
    return (
      <div className="App">
        counter: {this.counter}
        <br />
        {/* Des commentaires */}
        <Button
          text="Soustraire 1"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter -1 });
            console.log(this.counter);
          }}
          bgColor="tomato"
        ></Button>
        <Button
          text="Ajouter 1"
          onButtonClicked={() => {
            this.setState({ counter: this.state.counter  +1 });
            console.log(this.counter);
          }}
          bgColor="green"
        ></Button>
      </div>
    );
  }
}

export default App;
