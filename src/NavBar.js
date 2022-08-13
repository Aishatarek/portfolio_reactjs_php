import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
    const [user, setUser] = useState('');
    let navigate = useNavigate();
    const LogOut = () => {
        localStorage.removeItem('name');
        localStorage.clear();
        var name = localStorage.getItem('name');
        setUser(name);
        navigate("/")
    }

    useEffect(() => {
        var name = localStorage.getItem('name');
        setUser(name);
    }, [])
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks">
                            <Nav.Link href="/#latest">Latest Builds</Nav.Link>
                            <Nav.Link href="/#process">Process</Nav.Link>
                            <Nav.Link href="/#service">Services</Nav.Link>
                            <Nav.Link href="/#contact">Contact Us</Nav.Link>
                            {user ?
                                <NavDropdown title={user} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="" onClick={LogOut}>
                                        Log Out
                                    </NavDropdown.Item>
                                </NavDropdown>
                                :
                                <>
                                    <Nav.Link href="/Signin">
                                        <FontAwesomeIcon icon={faUser} />
                                    </Nav.Link>

                                </>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            {/* end navbar  */}
        </>
    )
}

export default NavBar