import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { NavLink, useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
            navigate('/login')
        }
        catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="login-page">
            <div className="login-container">
                <h3 className="login-heading">sign up</h3>
                <input type="email" value={registerEmail}
                    onChange={e => setRegisterEmail(e.target.value)}
                    placeholder="enter email"
                    className="input-email"

                />
                <input type="password" value={registerPassword}
                    onChange={e => setRegisterPassword(e.target.value)}
                    placeholder="enter password"
                    className="input-email"

                />
                <button onClick={register} className="btn-login">create</button>
                <span onClick={() => navigate('/login')} className="donthaveacoout">already have an account ?</span>
            </div>
        </div>
    )
}

export default Signup
