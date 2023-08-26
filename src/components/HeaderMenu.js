import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useSelector} from "react-redux";

const HeaderMenu = () => {
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        {
                            userInfo
                                ? (
                                    <NavDropdown title={userInfo.username} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                        Order
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                        LogOut
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                )
                                : (
                                    <>
                                        <Nav.Link href="/signup">SignUp</Nav.Link>
                                        <Nav.Link href="/login">
                                            Login
                                        </Nav.Link>
                                    </>
                                )
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderMenu;