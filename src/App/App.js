import React from 'react';
import Button from './components/Button/Button'

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>HELLO WORLD !</p>
      <Button text="OK" onButtonClicked={ (arg) => { alert('click sur OK')}}/>        
      <Button text="cancel" onButtonClicked={ (arg) => { alert('click sur cancel')}}/>
      <Button text="User ne cliquer pas ICI" bgColor="tomato" onButtonClicked={ (arg) => { alert('click sur pas ICI')}}/>
    </div>
  );
}

export default App;
