export const RECEIVE_USERS = 'RECEIVE_USERS'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'

export function receiveUSERS(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function userAnswer({ qid, answer, authedUser }) {
    return {
        type: QUESTION_ANSWERED,
        payload: {
            id: qid,
            answer,
            authedUser
        }
    }
}