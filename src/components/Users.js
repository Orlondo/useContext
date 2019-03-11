import React, { Component } from 'react';
import UsersContext from '../context/UsersContext';
import _ from 'lodash';
import '../App.css';

class Users extends Component {
  render() {
    return (
      <UsersContext.Consumer>
        { value => (
            <ul>
              { _.map(value, (post, index) => 
                (<li key={ index }>{ post.username }</li>)
              ) }
            </ul>
          )
        } 
      </UsersContext.Consumer>
    )
  }
}

export default Users;