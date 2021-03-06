import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import Loader from './loader'


const Login = () => {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch()
    const users = useSelector(state => {
        return state.users
    })
    const handleSubmit = (evt) => {
        evt.preventDefault()
        if(username === "") return 
        dispatch(setAuthedUser(Object.values(users).filter((e) => {
            return e.id === username
        })[0].id
        ))
    }
    const authedUser = useSelector(state => state.authedUser)

    if (authedUser !== null) {
        return <Redirect to="/" />
    }

    return (
        Object.keys(users).length === 0 ? <Loader /> :
        <div className="ui center aligned container" style={{ width: '80%', paddingTop: '30px' }}>
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Login to your account
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <label>Select your username</label>
                            <select className="ui dropdown" value={username} onChange={e => setUsername(e.target.value)}>
                                <option value="" disabled>Username</option>
                                {
                                    Object.values(users).map(item =>
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="ui fluid large green submit button" onClick={handleSubmit}>Login</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
            </div>
        </div>
    )
}

export default Login