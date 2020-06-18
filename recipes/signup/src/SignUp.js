import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import axios from 'axios';
import * as yup from 'yup';

const SignUp = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar style={{ background: 'rgb(203, 153, 126)', color: 'white' }} light>
                <NavbarBrand href="/" style={{ color: 'white' }}><h1>Secret Family Recipes</h1></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' style={{ background: 'white' }} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem >
                            <NavLink href="" style={{ color: 'white', fontWeight: 'bold' }}>
                                Sign In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" style={{ color: 'white', fontWeight: 'bold' }}>
                                Search Recipes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
};

export default SignUp;
