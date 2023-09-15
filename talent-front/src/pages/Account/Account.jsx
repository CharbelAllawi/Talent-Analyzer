import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './style.css';
import log1 from '../../assets/account-log1.svg'
import log2 from '../../assets/account-log2.svg'
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { localStorageAction } from "../../core/config/localstorage";
import Navbar from '../../components/Navbar/Navbar';
function Account() {

  const navigation = useNavigate();

  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const [signupCredentials, setSignupCredentials] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials({
      ...loginCredentials,
      [name]: value,
    });
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupCredentials({
      ...signupCredentials,
      [name]: value,
    });
  };
  const toggleMode = () => {
    setIsSignUpMode(!isSignUpMode);
  };
  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/login',
        body: loginCredentials,
      });

      localStorage.setItem("token", response.authorisation.token);
      console.log(localStorage.getItem('token'))

      navigation("/");
    } catch (error) {
      console.log(error);
      // setError(error.message);
    }
  };
  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/register',
        body: signupCredentials,
      });

      localStorageAction('token', response.authorisation.token);
      navigation("/landing");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar selecteditem="Login" />
      <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>

        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={loginCredentials.email}
                  onChange={handleLoginInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginCredentials.password}
                  onChange={handleLoginInputChange}
                />
              </div>
              <input type="submit" value="Login" className="btn solid" onClick={loginHandler} />
            </form>
            <form onSubmit={signupHandler} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={signupCredentials.username}
                  onChange={handleSignupInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={signupCredentials.email}
                  onChange={handleSignupInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={signupCredentials.password}
                  onChange={handleSignupInputChange}
                />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <br></br>
              <p>
                Welcome to Talent Analyzer! Whether you're seeking top talent or your dream job, our AI-powered platform revolutionizes recruitment.
                <p></p> Click 'Sign Up' and let's make perfect matches together!
              </p>
              <br></br>
              <button className="btn transparent" onClick={toggleMode}>
                Sign up
              </button>
            </div>
            <img src={log1} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <br></br>
              <p>
                Welcome back! Your journey with Talent Analyzer remains to be our priority.
                <p></p>
                Let's keep making exceptional matches together!
              </p>
              <br></br>
              <button className="btn transparent" onClick={toggleMode}>
                Sign in
              </button>
            </div>
            <img src={log2} className="image" alt="" />
          </div>
        </div>
      </div>

    </>

  );
}

export default Account;
