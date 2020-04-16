import { RECEIVE_QUESTIONS, ANSWER_QUESTION,NEW_QUESTION } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            const {  id,  answer, authedUser} = action.payload
            return {
                ...state,
                [id]: {
                    ...state[id],
                    [answer]: {
                        ...state[id][answer],
                        votes: state[id][answer].votes.concat([authedUser])
                    }
                }
            }
        case NEW_QUESTION:
                const {question} = action.payload
                return {
                    ...state,
                    [question.id] : question
                }
        default:
            return state
    }
}