import React from 'react'
import { useSelector } from 'react-redux'
import helper from '../utils/helper'
import { Redirect } from "react-router-dom";
import { Card, Image } from 'semantic-ui-react'


const Leaderboard = () => {

    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)

    const getSortedUsers = () => {
        const leadUser = Object.keys(users).map((userId) => ({
            user: users[userId],
            score: Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length,
        }))
        return leadUser.sort((a, b) => b.score - a.score)
    }

    return (
        !helper.isUserLogged(authedUser) ? <Redirect to='/login' /> :

            <div className="ui one column stackable center aligned page grid" style={{ paddingTop: '15px' }}>
                {Object.values(getSortedUsers()).map(user => (
                    <Card className="ui fluid black raised">
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src={user.user.avatarURL}
                            />
                            <Card.Header>{user.user.name}</Card.Header>
                            <Card.Description>
                                <div className="ui center aligned segment">
                                    <h2 className="sub header">
                                        Score
                                    <div className="ui header"> {user.score}</div>
                                    </h2>
                                </div>

                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div class="ui placeholder segment">
                                <div class="ui two column center aligned grid">
                                    <div class="ui vertical divider">&</div>
                                    <div class="middle aligned row">
                                        <div class="column">
                                            <div class="ui header">
                                                Answered questions
                                      </div>
                                            <div class="ui header">
                                                {Object.keys(user.user.answers).length}
                                            </div>
                                        </div>
                                        <div class="column">
                                            <div class="ui header">
                                                Created questions
                                      </div>
                                            <div class="ui header">
                                                {Object.keys(user.user.questions).length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </div>

    )
}

export default Leaderboard