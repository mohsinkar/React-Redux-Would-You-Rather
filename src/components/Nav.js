import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HeaderNav = () => (
    <Header as='h2'>
        Would You Rather?
    </Header>
)


const Nav = () => {

    const authedUser = useSelector(state => state.authedUser)
    const users = useSelector(state => state.users)
    
    const authUser = Object.values(users).find(user => user.id === authedUser)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(setAuthedUser(null))
    }

    const isLogged = (status) => {
        if (status !== null)
            return (
                <div className="right menu">
                    <div className="item">
                        <img className="ui avatar image" src={authUser.avatarURL}  alt={authUser.name} />
                        <span>{authUser.name}</span>
                    </div>

                    <div className="item"> <a href="/login" className="ui item" onClick={e => handleLogout()}>Logout</a></div>
                </div>
            )
        else
            return (<div className="right menu">
                <div className="item">
                </div>
                <div className="item"> <a href="/login" className="ui item">Login</a> </div>
            </div>
            )
    }

    return (
        <div>
            <HeaderNav />
            <div className="ui secondary  menu">
                <Link className='item' to='/' >Home</Link>
                <Link className='item' to='/newquestion' >New Question</Link>
                <Link className='item' to='/leaderboard' >Leaderboard</Link>
                {isLogged(authedUser)}

            </div>
        </div>
    )
}


export default Nav