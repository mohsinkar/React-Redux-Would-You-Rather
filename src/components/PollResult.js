import React, { useState, useEffect } from 'react';
import { Card, Image, Progress } from 'semantic-ui-react'
import {useSelector } from 'react-redux'
import helper from '../utils/helper'
import Login from '../components/Login'
import Loader from './loader'
import Message404 from './Message404'

const PollResult = (props) => {

    const [id] = useState(props.match.params.id);
    const [question, setQuestion] = useState({});
    const [message, setMessage] = useState(false)
    const [author, setAuthor] = useState({});
    const [answer, setAnswer] = useState('');
    const [totalVotes, setTotalVotes] = useState(0);
    const [optionOneVotes, setOneVotes] = useState(0);
    const [optionTwoVotes, setTwoVotes] = useState(0);

    const authedUser = useSelector(state => state.authedUser)
    const questions = useSelector(state => state.questions)
    const users = useSelector(state => state.users)


    useEffect(() => {
        const ques = Object.values(questions).filter((question) => (question.id === id)).map(question => {
            setQuestion(question)
            setAuthor(Object.values(users).find(user => question.author === user.id))
            setTotalVotes(question.optionOne.votes.length + question.optionTwo.votes.length)
            setOneVotes(question.optionOne.votes.length)
            setTwoVotes(question.optionTwo.votes.length)
        })
        
        if(ques.length < 1) setMessage(true)
        else {
            setMessage(false)
        } 
        if (helper.isUserLogged(authedUser))
            setAnswer(Object.values(users).find(user => user.id === authedUser).answers[id])

    },[questions, authedUser, users, id, message])

    const getAnswerFormat = (ans) => {
        return answer === ans ? 'green' : 'red'
    }

    const getLoader = () => {
        if(message) {
                return  <Message404 />
        }else {
            return (
                <Loader />
            )
        }
    }

    const userAnswer = (ans) => {
        return answer === ans ?<span> (Your Vote) </span>: 'red'
    }

    return (
        !helper.isUserLogged(authedUser) ? <Login /> :
        Object.keys(question).length === 0  ? getLoader() :
            <div className="ui one column stackable center aligned page grid" style={{ paddingTop: '50px' }}>
                <Card className="ui fluid black raised">
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src={author.avatarURL}
                        />
                        <Card.Header>Asked by {author.name}</Card.Header>
                        <Card.Meta><strong>Results</strong></Card.Meta>
                        <Card.Description style={{ paddingTop: '30px' }}>
                            <div>
                                <div className={`ui segment ${getAnswerFormat('optionOne')}`}>
                                    <Progress percent={(optionOneVotes / totalVotes) * 100} color='teal' progress>
                                        {optionOneVotes} of {totalVotes}
                                    </Progress>
                                    <div className="label">{question.optionOne.text} {userAnswer('optionOne')} </div>

                                </div>
                                <div className={`ui segment ${getAnswerFormat('optionTwo')}`}>
                                    <Progress percent={(optionTwoVotes / totalVotes) * 100} color='teal' progress>
                                        {optionTwoVotes} of {totalVotes}
                                    </Progress>
                                    <div className="label">{question.optionTwo.text} {userAnswer('optionTwo')} </div></div>
                            </div>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
    )
}


export default PollResult