import React, { useState, useEffect } from 'react';
import { Card } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import helper from '../utils/helper'
import { Redirect } from "react-router-dom";

const NewQuestion = () => {
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)

    const handleQuestionSubmit = (evt) => {
        evt.preventDefault();
        console.log(optionOne , optionTwo)
        //dispatch(handleAnswerQuestion({ qid: id, answer, authedUser }))
        //setAnswered(true)
    }


    return (
        !helper.isUserLogged(authedUser) ? <Redirect to='/login' /> :
            <div>
                <Card className="ui fluid black raised">
                    <Card.Content>
                        <Card.Header>Create New Question</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <div className="ui center aligned basic segment">
                            <div className="ui left aligned segment red">
                                <h4 className="sub header">Would you rather...</h4>
                            </div>
                            <div className="ui left input fluid">
                                <input type="text" placeholder="Enter option one text here" value={optionOne} onChange={e => setOptionOne(e.target.value)} />
                            </div>
                            <div className="ui horizontal divider">
                                Or
                        </div>
                            <div>
                                <div className="ui left input fluid">
                                    <input type="text" placeholder="Enter option two text here" value={optionTwo} onChange={e => setOptionTwo(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="ui teal labeled icon button" onClick={handleQuestionSubmit}>
                            Create New Question
                        <i className="add icon"></i>
                        </div>
                    </Card.Content>
                </Card>
            </div>
    )
}

export default NewQuestion