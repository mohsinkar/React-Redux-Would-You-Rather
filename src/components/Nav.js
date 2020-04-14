import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


//todo
// Based on user logged in update the componenet

const Nav = () => {
    const authedUser = useSelector(state => state.authedUser)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setAuthedUser(null))
    }
    
    const isLogged = (status) => {
        if (status !== null)
            return (
                <div className="right menu">
                    <a  href="/login" className="ui item" onClick={e => handleLogout()}>Logout</a>
                </div>
            )
        else
            return (<div className="right menu">
            <a href="/login" className="ui item">Login</a>
            </div>
            )
    }
        
    return (
        <div className="ui secondary pointing menu">
            <a className="item active">Home</a>
            <a className="item">New Question</a>
            <a className="item">Leaderboard</a>
            {isLogged(authedUser)}

        </div>
    )
}


export default Nav