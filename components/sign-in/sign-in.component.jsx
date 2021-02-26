import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import LoginForm from './sign-in.form'
import './sign-in.styles.scss'
import ConsumerDetails from './ConsumerDetails';

function SignIn() {

  const history = useHistory () 

  const adminUser = {
    email: "admin@xyz.com",
    password: "Admin_007"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      
      
      setUser({
        name: details.name,
        email: details.email
      })
    localStorage.setItem("Login", true )
    history.push('/ConsumerDetails')
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="SignIn">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name} </span></h2>
          <button onClick={Logout} >Logout</button>
        </div>
      ) : (
          <LoginForm Login={Login} error={error} />
        )}
    </div>
  );
}

export default SignIn
