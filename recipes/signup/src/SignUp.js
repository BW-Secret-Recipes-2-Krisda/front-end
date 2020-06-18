import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import axios from 'axios';
import * as yup from 'yup';

const SignUp = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto"><h1>Secret Family Recipes</h1></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
};

export default SignUp;
