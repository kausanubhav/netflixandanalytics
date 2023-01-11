import "./register.scss";
import { useRef,useState } from "react";
export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart=()=>{
        setEmail(emailRef.current.value);

    }
    const handleFinish=()=>{
        setPassword(passwordRef.current.value);

    }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign in </button>
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
            <input type="password" ref={passwordRef} placeholder="Enter Password" />
            <button className="registerButton" onClick={handleFinish}>
            Start membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
