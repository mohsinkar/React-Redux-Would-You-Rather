import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer
} from './_DATA'


// Function to reterieve the initialData for the application
export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}


export default {
    _saveQuestionAnswer
} 