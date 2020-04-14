import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Loader from '../components/loader'
import Nav from '../components/Nav'
import Login from '../components/Login'
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  }, [])


  return (
    <Router>

      <div className="ui center aligned container" style={{ width: '50%' }}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </Router>

  );
}

export default App;
