export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const NEW_QUESTION = 'NEW_QUESTION'

// Getting all the qeustions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

// Answer question by given id and authenticated user
export function answerQuestion({ qid, answer, authedUser }) {
  return {
    type: ANSWER_QUESTION,
    payload: {
      id: qid,
      answer,
      authedUser
    }
  }
}

// ADD new question
export function newQuestion(question) {
  return {
    type: NEW_QUESTION,
    payload: {
      question
    }
  }
}