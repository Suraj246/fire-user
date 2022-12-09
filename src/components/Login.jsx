import React, { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase'
import { NavLink, useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user.user.email)
      console.log(auth)
      navigate('/')
      localStorage.setItem('emailFirebase', user.user.email)
    }
    catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    localStorage.getItem('email')
  }, [])

  return (
    <div className="login-page">
      <div className="login-container">
        <h3 className="login-heading">log in</h3>
        <input type="email" value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
          placeholder="enter email"
          className="input-email"
        />
        <input type="password" value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
          placeholder="enter password"
          className="input-email"
        />
        <button onClick={login} className="btn-login">log in</button>
        <span onClick={() => navigate('/signup')} className="donthaveacoout">don't have account ?</span>
      </div>
    </div>
  )
}

export default Login
