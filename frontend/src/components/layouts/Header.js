import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const { isAuthenticated, user } = useSelector(state => state.authState);
  const { items: cartItems } = useSelector(state => state.cartState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout);
  };

  return (
    <div>
      <Navbar variant="dark" className="fixed-top">
        <Container>
          <div className="navbar navbar-brand  ">
            <Link to="/">
              <img id='logo' width="250px" alt='Auwshi-Herbs.png' src="/images/Herbs.png" />
            </Link>
          </div>
          <Nav className="me-auto nav-content">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link className="navbox" href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/product">Products</Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            {isAuthenticated ? (
              <Dropdown className='d-inline'>
                <Dropdown.Toggle variant='default pr-5' id='dropdown-basic'>
                  <figure className='avatar avatar-nav'>
                    <Image width="50px" src={user.avatar ?? './images/default_avatar.png'} />
                  </figure>
                  <span className='usr'>{user.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {user.role === 'admin' && <Dropdown.Item onClick={() => { navigate('admin/dashboard') }} className='text-dark'>Dashboard</Dropdown.Item>}
                  <Dropdown.Item onClick={() => { navigate('/myprofile') }} className='text-dark'>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={() => { navigate('/orders') }} className='text-dark'>Orders</Dropdown.Item>
                  <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link to="/login" className="btn" id="login_btn">Login</Link>
            )}
            <Link to="/cart" className="ml-3">
              <span id="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span className="ml-1" id="cart_count">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </Container>
      </Navbar>
      <div id="content">
        {/* Rest of the page content here */}
      </div>
    </div>
  );
}

export default Header;

