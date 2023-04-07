import { React, useRef } from 'react';
import './Loginsingup.css';
import Loader from '../../more/Loader';
import MetaData from '../../more/Metadata';
import { ToastContainer, toast } from 'react-toastify';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginSignup = ({ location, history }) => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

  const switchTabs = (e, tab) => {
    if (tab === 'login') {
      switcherTab.current.classList.add('shiftToNeutral');
      switcherTab.current.classList.remove('shiftToRight');

      registerTab.current.classList.remove('shiftToNeutralForm');
      loginTab.current.classList.remove('shiftToLeft');
    }
    if (tab === 'register') {
      switcherTab.current.classList.add('shiftToRight');
      switcherTab.current.classList.remove('shiftToNeutral');

      registerTab.current.classList.add('shiftToNeutralForm');
      loginTab.current.classList.add('shiftToLeft');
    }
  };
  return (
    <>
      <MetaData title="Login or Signup" />
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switchTabs(e, 'login')}>LOGIN</p>
              <p onClick={(e) => switchTabs(e, 'register')}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>

          <LoginForm ref={loginTab} />
          <SignupForm ref={registerTab} />
        </div>
      </div>
      <div></div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default LoginSignup;
