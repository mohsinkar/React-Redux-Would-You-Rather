import React, { useState, useEffect } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import helper from '../utils/helper'
import { Redirect } from "react-router-dom";
import {handleAnswerQuestion} from '../actions/shared'
import Loader from './loader'
import Login from '../components/Login'


const AnswerPoll = (props) => {
    const [id] = useState(props.match.params.id);
    const [question, setQuestion] = useState({});
    const [author, setAuthor] = useState({});
    const [answer, setAnswer] = useState('optionOne');
    const [answered, setAnswered] = useState(false)

    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)
    

    const dispatch = useDispatch()

    useEffect(() => {
        Object.values(questions).filter((question) => question.id === id).map(question => {
            setQuestion(question)
            setAuthor(Object.values(users).find(user => question.author === user.id))
        })
    })

    const handleAnswerSubmit = (evt) => {
        evt.preventDefault();
        dispatch(handleAnswerQuestion({qid:id,answer,authedUser}))
        setAnswered(true)
    }

    return (
        answered ?<Redirect to={`/result/${id}`} /> :
        !helper.isUserLogged(authedUser) ?  <Login /> :
        Object.keys(question).length === 0 ? <Loader /> :
        <div className="ui one column stackable center aligned page grid" style={{ paddingTop: '50px' }}>
            <Card className="ui fluid black raised">
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={author.avatarURL}
                    />
                    <Card.Header>{author.name} Asks</Card.Header>
                    <Card.Meta><strong>Would you rather ?</strong></Card.Meta>
                    <Card.Description style={{ paddingTop: '30px' }}>
                        <div className="ui piled segments">
                            <div className="ui segment"><div className="ui radio checkbox"> <input type="radio" name="example2" checked={answer === 'optionOne'} value='optionOne'   onChange={() => setAnswer('optionOne')} /><label>{question.optionOne.text}</label></div></div>
                            <div className="ui segment"><div className="ui radio checkbox"> <input type="radio" name="example2"  checked={answer === 'optionTwo'}  value='optionTwo'  onChange={() => setAnswer('optionTwo')} /><label>{question.optionTwo.text}</label></div></div>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        <Button className='fluid ui button' basic color='green' onClick={handleAnswerSubmit}>
                            Submit Answer
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}


export default AnswerPoll