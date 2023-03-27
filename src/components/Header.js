import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import Cart from './Cart';

function Header() {
    return (
        <Navbar sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav className='me-auto'>
                <Nav.Link>
                    <h3>Redux Shopping Card</h3>
                </Nav.Link>
            </Nav>
            <div>
                <Cart />
            </div>
        </Container>
    </Navbar>
    );
}

export default Header;