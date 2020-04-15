import React, { useState } from 'react';


const AnswerPoll = (props) => {
    const [id] = useState(props.match.params.id);  

    return (
        <div>
            Answer Poll
        </div>
    )
}


export default AnswerPoll