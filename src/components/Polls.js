import React, { useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Polls = (props) => {
    const [question] = useState(props.question);
    const [author] = useState(props.author);
    const [answered] = useState(props.answered);


    return (
        <div className="ui one column stackable center aligned page grid" style={{ paddingTop: '15px' }}>
            <Card className="ui fluid black raised">
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={author.avatarURL}
                    />
                    <Card.Header>{author.name} Asks</Card.Header>
                    <Card.Meta><strong>Would you rather ?</strong></Card.Meta>
                    <Card.Description>
                        <div className='wouldyou'>
                            {question.optionOne.text}
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div>
                        {
                            answered ? <Link className='sign-in-button' to={`/question/${question.id}`} ><Button className='fluid ui button' basic color='green'>
                                View Poll
                    </Button>
                            </Link> : <Link className='sign-in-button' to={`/result/${question.id}`} >
                                    <Button className='fluid ui button' basic color='green'>
                                        View Poll
                        </Button>
                                </Link>
                        }

                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}


export default Polls