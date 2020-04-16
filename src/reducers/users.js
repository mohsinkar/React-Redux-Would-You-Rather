import { RECEIVE_USERS, QUESTION_ANSWERED,NEW_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case QUESTION_ANSWERED:
            console.log(action)
            const { id, answer, authedUser } = action.payload
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [id]: answer
                    }
                }
            }
        case NEW_QUESTION:
            const {question} = action.payload
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        default:
            return state
    }
}