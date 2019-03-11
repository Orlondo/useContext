import React, { useState, useEffect } from 'react';
import UsersContext from '../context/UsersContext';
import axios from 'axios';

const UsersProvider = (props) => {
  const [state, setState] = useState({
    data: []
  })

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setState({ ...state, data: res.data })) 
  }, [])

  const usersContext = {
    state, setState
  }

  return (
    <UsersContext.Provider value={ usersContext.state.data }>
      { props.children }
    </UsersContext.Provider>
  ) 
}

export default UsersProvider;