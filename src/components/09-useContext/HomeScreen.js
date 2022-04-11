import React, {useContext} from 'react';
import {UserContext} from './UserContext';

export const HomeScreen = () => {

  // getting values from userContext:
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <div>
        <h1>HomeScreen</h1>
        <hr />
    </div>
  )
}
