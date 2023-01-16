import "./register.scss";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from 'react-router-dom'
//TODO: Client-side Error notifications
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const navigate = useNavigate();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("/users/register", { username,email, password });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/login" style={{zIndex:'9999'}}> 
          <button className="loginButton">Sign in </button>
          </Link>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movied, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" ref={emailRef} placeholder="Email Address" />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="text"
              ref={usernameRef}
              placeholder="Enter Username"
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter Password"
            />
            <button className="registerButton" onClick={handleFinish}>
              Start membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
