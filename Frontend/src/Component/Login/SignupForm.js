import { forwardRef, React, useState } from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import FaceIcon from '@material-ui/icons/Face';
import { useDispatch } from 'react-redux';
import { register } from '../../actions/userAction';

import { Phone } from '@material-ui/icons';

const SignupForm = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
  });

  const { name, email, mobile, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('name', name);
    myForm.set('email', email);
    myForm.set('password', password);
    myForm.set('mobile', mobile);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="signUpForm"
        ref={ref}
        encType="multipart/form-data"
        onSubmit={registerSubmit}
      >
        <div className="signUpName">
          <FaceIcon />
          <input
            type="text"
            placeholder="Enter your Name"
            required
            name="name"
            value={name}
            onChange={registerDataChange}
          />
        </div>
        <div className="signUpEmail">
          <MailOutlineIcon />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            name="email"
            value={email}
            onChange={registerDataChange}
          />
        </div>

        <div className="signUpmobile">
          <Phone />
          <input
            type="text"
            onChange={(e) => {
              if (!/^\d+$/.test(e.target.value) || e.target.value.length > 10) {
                e.target.value = e.target.value.substring(
                  0,
                  e.target.value.length - 1
                );
              }
              registerDataChange(e);
            }}
            placeholder="Enter your Contact Number"
            required
            name="mobile"
            value={mobile}
          />
        </div>
        <div className="signUpPassword">
          <LockOpenIcon />
          <input
            type="password"
            placeholder="Create a Password"
            required
            name="password"
            value={password}
            onChange={registerDataChange}
          />
        </div>
        <input type="submit" value="Register" className="signUpBtn" />
      </form>
    </>
  );
});

export default SignupForm;
