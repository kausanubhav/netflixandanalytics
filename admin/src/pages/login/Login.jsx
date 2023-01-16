import "./login.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="wrapper">
        <form className="loginForm">
          <input
            type="text"
            className="loginInput"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="loginInput"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="loginBtn"
            onClick={handleClick}
            disabled={isFetching}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
