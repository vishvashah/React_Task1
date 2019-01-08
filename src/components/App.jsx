import React from 'react';
import Button from '../containers/Button';
import UserList from '../containers/UserList';
import Loading from '../containers/Loading'


let App = () => (
  <div>
    <Button />
    {/* <Loading /> */}
    <UserList />
  </div>
);


export default App;
