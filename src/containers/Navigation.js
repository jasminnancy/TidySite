import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Navigation = (props) => {
    return (
        <Navbar sticky='top' bg="light" varian="light">
            <Navbar.Brand onClick={(e) => props.handleChangePageClick(e)} name='home' href="#">TidySite</Navbar.Brand>
            <Nav className='mr-auto'>
                <Nav.Link onClick={(e) => props.handleChangePageClick(e)} active={props.activePage === 'home'} name='home'>Home</Nav.Link>
                <Nav.Link onClick={(e) => props.handleChangePageClick(e)} active={props.activePage === 'calendar'} name='calendar'>Calendar</Nav.Link>
                <Nav.Link onClick={(e) => props.handleChangePageClick(e)} active={props.activePage === 'projects'} name='projects'>Projects</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-dark">Search</Button>
            </Form>
        </Navbar>
    )
}

export default Navigation