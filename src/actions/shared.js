import { getInitialData } from '../utils/api'
import API from '../utils/api'
import { receiveUSERS, userAnswer } from '../actions/users'
import { receiveQuestions, answerQuestion } from '../actions/questions'
//import { setAuthedUser } from '../actions/authedUser'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUSERS(users))
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleAnswerQuestion({ qid, answer, authedUser }) {
    return (dispatch) => {

        // dispath save answer to question
        dispatch(answerQuestion({ qid, answer, authedUser }))
        // dispatch save ansert to user
        dispatch(userAnswer({ qid, answer, authedUser }))
        
        // call api with error catch
        return API._saveQuestionAnswer({ 'authedUser':authedUser, qid, answer })
            .catch((error) => {
                console.log(error)
                dispatch(answerQuestion({ qid, answer, authedUser }))
                dispatch(userAnswer({ qid, answer, authedUser }))
            })
    }
}



export function handleNewQuestion() {
    return (dispatch) => {

    }
}