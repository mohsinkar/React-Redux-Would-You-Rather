import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'


const AnsweredPoll = (props) => {
    const [question] = useState(props.question);
    const [author] = useState(props.author);

    return (
        <div className="ui one column stackable center aligned page grid" style={{paddingTop: '15px'}}>
            <Card>
                <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={author.avatarURL}
                    />
                    <Card.Header>{author.name} Poll</Card.Header>
                    <Card.Meta>Would you rather ?</Card.Meta>
                    <Card.Description>
                        Steve wants to add you to the group <strong>best friends</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Answer Poll
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}


export default AnsweredPoll