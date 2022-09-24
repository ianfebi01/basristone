import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../../components/input/LoginInput";
import Gap from "../../helpers/Gap";
import "./style.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import PulseLoader from "react-spinners/PulseLoader";

export default function Login() {
  const loginIfos = {
    email: "",
    password: "",
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [login, setLogin] = useState(loginIfos);
  const { email, password } = login;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginValidation = Yup.object({
    email: Yup.string()
      .required("Email address required.")
      .email("Must be a valid email address.")
      .max(100),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password min 6 char"),
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const loginSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          email,
          password,
        }
      );
      dispatch({ type: "LOGIN", payload: data });
      Cookies.set("user", JSON.stringify(data));
      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };
  return (
    <div className='main'>
      <header className='header-small header-login'>
        <div className='header-container'>
          <Link to='/' style={{ textDecoration: "none", color: "white" }}>
            <h1 className='is-white brand-logo'>Basristone</h1>
          </Link>
        </div>
      </header>
      <div className='content-login'>
        <div className='content-body'>
          <div className='login-wrapper'>
            <h1>Sign In</h1>
            <Gap h='5px' />
            <Formik
              enableReinitialize
              initialValues={{
                email,
                password,
              }}
              validationSchema={loginValidation}
              onSubmit={() => {
                loginSubmit();
              }}
            >
              {(formik) => (
                <Form>
                  <LoginInput
                    placeholder='Enter your email'
                    type='text'
                    name='email'
                    onChange={handleLoginChange}
                  />
                  <LoginInput
                    placeholder='Enter your password'
                    type='password'
                    name='password'
                    onChange={handleLoginChange}
                  />
                  <Gap h='5px' />
                  <button type='submit' className='btn-submit'>
                    {loading ? (
                      <PulseLoader color='#fff' size={10} />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
            <div className='span-wrapper'>
              <span>Not have an Account ?</span>
              <Link to='/register'>Sign Up</Link>
            </div>
            <Gap h='10px' />
          </div>
        </div>
      </div>
    </div>
  );
}
