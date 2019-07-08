import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

// make this like a function with props or sumn instead of straight hard-coded
const Header = () => (
  <Navbar 
    collapseOnSelect 
    expand="lg" 
    sticky="top"
    bg="white" 
    variant="light">
    <Navbar.Brand href="/">
      <img 
        src='../static/img/nsbe_logo.png'
        width='40'
        height='40'
        className='d-inline-block align-top'
        alt='National Society of Black Engineers Logo' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown
        title='Membership'
        id='collapsible-nav-dropdown'>
        <NavDropdown.Item>Getting Involved</NavDropdown.Item>
        <NavDropdown.Item>Point System</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown 
        title="About" 
        id="collapsible-nav-dropdown">
        <NavDropdown.Item>Executive Board</NavDropdown.Item>
        <NavDropdown.Item>Constitution</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>National Website</NavDropdown.Item>
        <NavDropdown.Item>Region III Website</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link>Corporate</Nav.Link>
      <Nav.Link>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
);

export default Header;