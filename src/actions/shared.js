import { getInitialData } from '../utils/api'
import { receiveUSERS } from '../actions/users'
import { receiveQuestions } from '../actions/questions'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUSERS(users))
                dispatch(receiveQuestions(questions))
            })
    }
}