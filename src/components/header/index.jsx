import React from 'react'
import './style.css'
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap'
import Logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <div className='Header'>
        <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
        >
            <Container className='navbar'>
                <NavbarBrand className="mr-lg-5">
                    <img src={Logo} alt="Logo" />
                </NavbarBrand>

                <Button className="navbar-toggler" id="navbar_global">
                    <span className="navbar-toggler-icon" />
                </Button>

                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Our Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Why Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Testimonial</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">FAQ</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header