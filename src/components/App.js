import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from '../components/Nav'
import Login from '../components/Login'
import AnswerPoll from '../components/AnswerPoll'
import PollResult from '../components/PollResult'
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(handleInitialData())
  })


  return (
    <Router>

      <div className="ui center aligned container" style={{ width: '50%', paddingTop: '20px' }}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/question/:id" component={AnswerPoll} />
        <Route path="/result/:id" component={PollResult} />
      </div>
    </Router>

  );
}

export default App;
