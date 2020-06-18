import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MarketingPage from '../src/MarketingPage.png';

import axios from 'axios';
import * as yup from 'yup';

const SignUp = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div style={{ background: 'rgb(242, 239, 199)' }}>
            <Navbar style={{ background: 'rgb(130, 65, 1)', color: 'white' }} light>
                <NavbarBrand href="/" style={{ color: 'white' }}>
                    <h1>
                        Secret Family Recipes Sign Up
                    </h1>
                </NavbarBrand>
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
            <img style={{ width: '100%' }} src={MarketingPage} alt='' />
            <Form style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                <FormGroup>
                    <legend>Name</legend>
                    <input
                        type='name'
                        name='name' />
                </FormGroup>
                <FormGroup>
                    <legend>Email</legend>
                    <input
                        type='email'
                        name='email' />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a User Name</legend>
                    <input
                        type='text'
                        name='username' />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a Password</legend>
                    <input
                        type='password'
                        name='password' />
                </FormGroup>
                <div style={{ width: '30%', margin: '0 auto', border: '2px ridge rgb(130, 65, 1)', background: 'rgb(158, 79, 2)', color: 'white' }}>
                    <h5>Do you want your recipes to be searchable for others?</h5>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='private'
                                checked={false} />
                        Private(not others)
                    </label>
                    </FormGroup>
                    <FormGroup check>
                        <label check>
                            <input
                                type='checkbox'
                                name='public'
                                checked={false} />
                            Public(all others)
                    </label>
                    </FormGroup>
                </div>
                <Button style={{ color: 'white', background: 'rgb(158, 79, 2)', border: '2px ridge rgb(130, 65, 1)', margin: '2%' }}>Submit</Button>
            </Form>
        </div>
    )
};

export default SignUp;
