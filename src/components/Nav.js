import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Header } from 'semantic-ui-react'


const HeaderNav = () => (
    <Header as='h2'>
        Would You Rather?
    </Header>
)


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
                    <div className="item">
                        <img className="ui avatar image" src={authedUser.avatarURL}  alt={authedUser.name} />
                        <span>{authedUser.name}</span>
                    </div>

                    <div className="item"> <a href="/login" className="ui item" onClick={e => handleLogout()}>Logout</a></div>
                </div>
            )
        else
            return (<div className="right menu">
                <div className="item">
                    <i className="user icon"></i>
                </div>
                <div className="item"> <a href="/login" className="ui item">Login</a> </div>
            </div>
            )
    }

    return (
        <div>
            <HeaderNav />
            <div className="ui secondary  menu">
                <a className="item active">Home</a>
                <a className="item">New Question</a>
                <a className="item">Leaderboard</a>
                {isLogged(authedUser)}

            </div>
        </div>
    )
}


export default Nav