import React from 'react';
import { Tab, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PoolsList from './PollsList'
import AnsweredPoolList from './AnsweredPollList'

const HeaderHome = () => (
    <Header as='h2'>
        Answer and view polls
    </Header>
)



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

    if (authedUser === null) {
        return <Redirect to="/login" />
    }
    return (
        <div className="ui center aligned container" style={{ width: '80%', paddingTop: '30px' }}>
            <HeaderHome />
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />

        </div>
    )
}

export default Home

