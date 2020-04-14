import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'


const Login = () => {

    const [username, setUsername] = useState("");
    const dispatch = useDispatch()
    const users = useSelector(state => {
        return state.users
    })
    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch(setAuthedUser(username))
    }
    const authedUser = useSelector(state => state.authedUser)

    if (authedUser !== null) {
        return <Redirect to="/" />
    }

    return (
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
                                    users && Object.values(users).map(item =>
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