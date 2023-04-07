import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../../../actions/userAction';
import './Nav.css';

export default function NavBar() {
  const history = useHistory();
  const dispatch = useDispatch();
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
            to="/dashboard"
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
            <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
              <Nav.Link
                className={index === 0 ? 'nav-active' : 'nav-item'}
                onClick={() => setIndex(0)}
                as={Link}
                to="/dashboard"
              >
                Dashboard
              </Nav.Link>
              <NavDropdown
                className={index === 1 ? 'nav-active' : 'nav-item'}
                onClick={() => setIndex(1)}
                title="Sale"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/newsale">
                  New Sales
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/salesreport">
                  Sales Report
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={index === 2 ? 'nav-active' : 'nav-item'}
                onClick={() => setIndex(2)}
                title="Product"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/addproduct">
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageproduct">
                  Manage Product
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className={index === 3 ? 'nav-active' : 'nav-item'}
                onClick={() => setIndex(3)}
                title="Purchase"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/addpurchase">
                  Add Purchase
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/purchasereport">
                  Purchase Report
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/stock">
                Stock
              </Nav.Link>
            </Nav>
            <Button
              as={Link}
              to="/pos"
              variant="primary"
              id="button-addon2"
              className="Button"
              style={{ marginRight: '20px' }}
            >
              POS
            </Button>
            <NavDropdown
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
