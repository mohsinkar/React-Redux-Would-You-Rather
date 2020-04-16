import { RECEIVE_USERS, QUESTION_ANSWERED } from '../actions/users'

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
        default:
            return state
    }
}