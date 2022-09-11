import { Link } from "react-router-dom";
import LoginInput from "../../components/input/LoginInput";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function Register() {
  return (
    <div className='main'>
      <header className='header-small header-login'>
        <div className='header-container'>
          <h1 className='is-white brand-logo'>Basristone</h1>
          <button className='btn-1'>Contact</button>
        </div>
      </header>
      <div className='content-login'>
        <div className='content-body'>
          <div className='login-wrapper'>
            <h1>Register</h1>
            <Gap h='5px' />
            <LoginInput placeholder='Enter your first name' type='text' />
            <LoginInput placeholder='Enter your last name' type='text' />
            <LoginInput placeholder='Enter your email' type='text' />
            <LoginInput placeholder='Enter your password' type='password' />
            <LoginInput placeholder='Confirm password' type='password' />
            <Gap h='5px' />
            <button className='btn-submit'>Sign Up</button>
            <div className='span-wrapper'>
              <span>Already have an Account ?</span>
              <Link to='/login'>
                <a href='#'>Sign in</a>
              </Link>
            </div>
            <Gap h='10px' />
          </div>
        </div>
      </div>
    </div>
  );
}
