import { Link } from "react-router-dom";
import LoginInput from "../../components/input/LoginInput";
import Gap from "../../helpers/Gap";
import "./style.css";

export default function Login() {
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
            <h1>Sign In</h1>
            <Gap h='5px' />
            <LoginInput
              placeholder='Enter your email'
              type='text'
              error='tes eror'
            />
            <LoginInput
              placeholder='Enter your email'
              type='text'
              error='tes eror'
            />
            <Gap h='5px' />
            <button className='btn-submit'>Sign In</button>
            <div className='span-wrapper'>
              <span>Not have an Account ?</span>
              <Link to='/register'>
                <a href='#'>Sign Up</a>
              </Link>
            </div>
            <Gap h='10px' />
          </div>
        </div>
      </div>
    </div>
  );
}
