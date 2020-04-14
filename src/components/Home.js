import React from 'react';
import { Tab, Header, Icon } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PoolsList from './PollsList'

const HeaderHome = () => (
    <Header as='h4' icon>
        <Icon name='home' />
        <Header.Subheader>
            Answer and view polls
      </Header.Subheader>
    </Header>
)



const panes = [
    {
        menuItem: 'Unanswered Questions ',
        render: () => <Tab.Pane attached={false}><PoolsList /></Tab.Pane>,
    },
    {
        menuItem: 'Answered Questions',
        render: () => <Tab.Pane attached={false}>Answered Questions Component</Tab.Pane>,
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

