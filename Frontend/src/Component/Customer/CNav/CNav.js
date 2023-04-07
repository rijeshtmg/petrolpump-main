import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Navbar from 'react-bootstrap/Navbar';
import { logout } from '../../../actions/userAction';
import { NavDropdown } from 'react-bootstrap';
import './CNav';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  function logoutUser() {
    dispatch(logout());
    toast.success('Logout Successfully');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    history.push('/');
  }
  const [index, setIndex] = useState(0);
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <>
      <Navbar bg="white" expand="lg" className="m-2 Navbar">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/userHome"
            style={{
              color: '#3B67FF',
              fontSize: 24,
              fontWeight: 'bold',
              marginLeft: -20,
            }}
          >
            Petrol Pump
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-3 gap-5">
              <Nav.Link
                className={index === 0 ? 'nav-active' : 'nav-item'}
                onClick={() => setIndex(0)}
                as={Link}
                to="/userHome"
              >
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/purchase">
                Purchase
              </Nav.Link>
              <Nav.Link as={Link} to="/statement">
                Statement
              </Nav.Link>
            </Nav>
            <NavDropdown
              className={index === 3 ? 'nav-active' : 'nav-item'}
              profile
              onClick={() => setIndex(3)}
              title={<AccountCircleIcon />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
}
