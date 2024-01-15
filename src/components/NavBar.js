import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './styles/NavBar.css'

const NavBar = () => {
    return (
        <>
        <div className='header'>
            <Navbar>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Clientes</Nav.Link>
                        <Nav.Link href="/produtos">Produtos</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
        </>
    )
}

export default NavBar
