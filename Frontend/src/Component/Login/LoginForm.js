import { forwardRef, React, useEffect, useRef, useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';
import './Loginsingup.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userAction';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../../constans/userContans';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = forwardRef((props, ref) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v2/login`,
        { email: loginEmail, password: loginPassword },
        config
      );
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      if (data?.user?.role == 'admin') {
        history.push('/dashboard');
      }
      if (data?.user?.role == 'superadmin') {
        history.push('/users');
      }
      if (data?.user?.role == 'user') {
        history.push('/userhome');
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: 'error' });
    }
  };

  return (
    <>
      <form className="loginForm" ref={ref} onSubmit={loginSubmit}>
        <div className="email">
          <MailOutlineIcon />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />
        </div>
        <div className="loginPassword">
          <LockOpenIcon />
          <input
            type="password"
            placeholder="Enter Password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
        </div>
        <Link to="/password/forgot">Forgot Password ?</Link>
        <input type="submit" value="Login" className="loginBtn" />
      </form>
    </>
  );
});

export default LoginForm;
