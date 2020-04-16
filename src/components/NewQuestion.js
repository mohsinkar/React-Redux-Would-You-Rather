import React from 'react';
import { Card } from 'semantic-ui-react'

const NewQuestion = () => {
    return (
        <div>
            <Card className="ui fluid black raised">
                <Card.Content>
                    <Card.Header>Create New Question</Card.Header>
                    <Card.Description>
                        <div className="ui center aligned segment">
                            <h4 className="sub header">
                                Complete the question
                            </h4>
                        </div>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div class="ui center aligned basic segment">
                        <h4 className="sub header">Would you rather...</h4>
                        <div class="ui left input fluid">
                            <input type="text" placeholder="Enter option one text here" />
                        </div>
                        <div class="ui horizontal divider">
                            Or
                        </div>
                        <div>
                            <div class="ui left input fluid">
                                <input type="text" placeholder="Enter option two text here" />
                            </div>
                        </div>
                    </div>
                    <div class="ui teal labeled icon button">
                        Create New Question
                <i class="add icon"></i>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default NewQuestion