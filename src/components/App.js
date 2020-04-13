import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Loader from '../components/loader'
import Nav from '../components/Nav'
import Login from '../components/Login'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])


  return (
    <div className="ui center aligned container" style={{ width: '50%' }}>
      <Nav />
      <Login />
    </div>
  );
}

export default App;
