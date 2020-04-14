import React from 'react';
import { useSelector } from 'react-redux'
import AnsweredPoll from './AnsweredPoll'

const AnsweredPollList = () => {
    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)

    return (
        <div>
            {
                Object.values(questions).filter((question) => (question.id in authedUser.answers)).map(question => (
                    <AnsweredPoll question={question} author={Object.values(users).find(user => question.author === user.id)} key={question.id}></AnsweredPoll>
                ))
            }
        </div>
    )
}

export default AnsweredPollList