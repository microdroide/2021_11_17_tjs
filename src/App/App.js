import React, { Component } from 'react';
import Button from './components/Button/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button text="hello" bgColor="blue" style={{ fontSize: '15px' }}/>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
