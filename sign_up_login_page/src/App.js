import React, { Component } from 'react';
import {SignUp, Login} from './components/forms';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SignUp />
        <Login />
      </div>
    );
  }
}

export default App;