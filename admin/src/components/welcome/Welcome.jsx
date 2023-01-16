import { Link } from 'react-router-dom';
import './welcome.css';
export default function Welcome() {
  return (
    <div className='welcomeContainer'>
        <div className="wrapper">
            <h2>Welcome Anubhav</h2>
            <h3>Please <Link className='loginLink' to="/login">Login</Link> to continue</h3>
        </div>
    </div>
  )
}