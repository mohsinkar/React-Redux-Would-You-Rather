import React from 'react';
import { useSelector } from 'react-redux'


const PoolsList = () => {
    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)

    return (
        <div>
            {
                Object.values(questions).filter((question) => !(question.id in authedUser.answers)).map(question => (
                    <div>{question.id}</div>
                ))
            }
        </div>
    )
}


export default PoolsList