import React, { Component } from 'react';
import UserProvider from './provider/UsersProvider';

import './App.css';
import Users from './components/Users';

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <h1>useContext</h1>
          <Users />
        </div>      
      </UserProvider>
    );
  }
}

export default App;
