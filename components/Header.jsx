import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SocialLink from './links/SocialLink'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// make this like a function with props or sumn instead of straight hard-coded
const Header = () => (
  <Navbar
    collapseOnSelect
    expand='lg'
    sticky='top'
    bg='white'
    variant='light'>
    <Navbar.Brand href='/'>
      <img
        src='../static/img/nsbe_logo.png'
        width='40'
        height='40'
        className='d-inline-block align-top'
        alt='National Society of Black Engineers Logo' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='mr-auto'>
        <NavDropdown title='Membership' id='collapsible-nav-dropdown'>
          <NavDropdown.Item
            href='getting-involved'>
            Getting Involved
          </NavDropdown.Item>
          <NavDropdown.Item href='/point-system'>Point System</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title='About' id='collapsible-nav-dropdown'>
          <NavDropdown.Item
            href='/executive-board'>
            Executive Board
          </NavDropdown.Item>
          <NavDropdown.Item href='constitution'>Constitution</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item
            href='http://nsbe.org/'
            target='_blank'>
            National Website
          </NavDropdown.Item>
          <NavDropdown.Item
            href='http://www.nsbe.org/Regions/Region3/default.aspx'
            target='_blank'>
            Region III Website
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>Corporate</Nav.Link>
        <Nav.Link>Contact</Nav.Link>
      </Nav>
      <SocialLink
        href='https://facebook.com/ufnsbe/'
        target='_blank'
        fontAwesome={faFacebook}
        size='2x'
        margin='mr-3' />
      <SocialLink
        href='https://instagram.com/ufnsbe/'
        target='_blank'
        fontAwesome={faInstagram}
        size='2x'
        margin='mr-3' />
      <SocialLink
        href='https://calendar.google.com/calendar/embed?src=nsbe.ufl%40gmail.com&ctz=America%2FLos_Angeles'
        target='_blank'
        fontAwesome={faCalendarAlt}
        size='2x' />
    </Navbar.Collapse>
  </Navbar>
)

export default Header
