import React from 'react'
import { useSelector } from 'react-redux'

//todo
// Based on user logged in update the componenet

const Nav = () => {
    const authedUser = useSelector(state => state.authedUser)

    return (
        <div className="ui secondary pointing menu">
            <a className="item active">Home</a>
            <a className="item">New Question</a>
            <a className="item">Leaderboard</a>
            {isLogged(authedUser)}

        </div>
    )
}

const isLogged = (status) => {
    if (status !== null)
        return (
            <div className="right">
                <a className="ui item">Logout</a>
            </div>
        )
    else
        return (<div className="right menu">
            <a className="ui item">Login</a>
        </div>
        )
}

export default Nav