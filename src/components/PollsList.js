import React from 'react';
import { useSelector } from 'react-redux'
import Polls from './Polls'


const PoolsList = () => {
    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)

    const setAuthedUserAnswers = Object.values(users).find(user => user.id === authedUser)
    return (
        <div>
            {
                Object.values(questions).filter((question) => !(question.id in setAuthedUserAnswers.answers)).sort((a, b) => b.timestamp - a.timestamp).map(question => (
                    <Polls question={question} author={Object.values(users).find(user => question.author === user.id)} key={question.id} answered={true}></Polls>
                ))
            }
        </div>
    )
}


export default PoolsList