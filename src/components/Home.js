import React from 'react';
import { Tab, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PoolsList from './PollsList'
import AnsweredPoolList from './AnsweredPollList'

const panes = [
    {
        menuItem: 'Unanswered Questions ',
        render: () => <Tab.Pane attached={false}><PoolsList /></Tab.Pane>,
    },
    {
        menuItem: 'Answered Questions',
        render: () => <Tab.Pane attached={false}><AnsweredPoolList /></Tab.Pane>,
    },
]

const Home = () => {
    const authedUser = useSelector(state => state.authedUser)
    return (
        authedUser === null ? <Redirect to="/login" /> :
            <div className="ui center aligned container" style={{ width: '80%', paddingTop: '30px' }}>
                <Header as='h2'> Answer and view polls</Header>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>
    )
}

export default Home

