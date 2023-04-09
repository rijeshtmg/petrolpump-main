import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Profile.css';
import { logout } from '../../actions/userAction';
import { toast } from 'react-toastify';
import axios from 'axios';

const Profile = ({ history }) => {
  const { isAuthenticated } = useSelector((state) => state.user);

  const [user, setUser] = useState({});

  const loadProfile = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_API}/api/v2/me`, {
        headers: {
          authorization: localStorage.getItem('token'),
        },
      });
      console.log(res.data);
      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    toast.success('Logout Successfully');
  }

  return (
    <>
      <div className="ProfileInfo">
        <div className="profileContainer">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                opacity: '1',
                fontSize: '2vmax',
                marginTop: '20px',
                fontWeight:"500"
              }}
            >
              My Profile
            </h1>

            <img
              className="profile__img"
              src={user.avatar?.url}
              alt={user?.name}
            />
            <Link
              to="/editprofile"
              className="edit__profile"
              style={{
                margin: '10px 0 0 -70px',
                color: '#3B67FF',
                textDecoration: 'none',
              }}
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="information">
          <div className="middle">
            <div className="info">
              <h4>Full Name:</h4>
              <p className="profile">{user?.name}</p>
            </div>
            <div className="info">
              <h4>Email:</h4>
              <p className="profile">{user?.email}</p>
            </div>
            <div className="info">
              <h4>Contact:</h4>
              <p className="profile">{user.mobile}</p>
            </div>
            <div className="info">
              <h4>Joined On:</h4>
              <p className="profile">{String(user.createdAt).substr(0, 10)}</p>
            </div>
            <div className="info">
              <h4>Address:</h4>
              <p className="profile">{String(user.address)}</p>
            </div>
            <div className="info">
              <h4>Description:</h4>
              <p className="profile">{String(user.description)}</p>
            </div>

            <div className="change__info">
              <Link to="/changepassword" className="settings">
                Change Password
              </Link>
              <button onClick={logoutUser} className="buttonlg">
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
