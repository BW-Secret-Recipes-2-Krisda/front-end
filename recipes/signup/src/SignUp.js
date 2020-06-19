import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import MarketingPage from '../src/MarketingPage.png';

import axios from 'axios';
import * as yup from 'yup';

const SignUp = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        private: '',
        public: ''
    });
    const toggleNavbar = () => setCollapsed(!collapsed);
    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handlepreferences = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    return (
        <div style={{ background: '#ebcd4' }}>
            <Navbar style={{ background: '#b17537', color: 'white' }} light>
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
            <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} alt='' />
            <Form style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
                <FormGroup>
                    <legend>Name</legend>
                    <input style={{ border: '2px ridge #9e5110' }}
                        type='name'
                        name='name'
                        value={formData.name}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a User Name</legend>
                    <input style={{ border: '2px ridge #9e5110' }}
                        type='text'
                        name='username'
                        value={formData.username}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a Password</legend>
                    <input style={{ border: '2px ridge #9e5110' }}
                        type='password'
                        name='password'
                        value={formData.password}
                        onChange={onInputChange} />
                </FormGroup>
                <div style={{ width: '30%', margin: '0 auto', border: '2px ridge #9e5110', background: '#b17537', color: 'white' }}>
                    <h5>Do you want your recipes to be searchable for others?</h5>
                    <FormGroup tag='fieldset'>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='private'
                                    value='private'
                                    onChange={onInputChange} />
                        Private(not others)
                    </label>
                        </FormGroup>
                        <FormGroup check>
                            <label check>
                                <input
                                    type='radio'
                                    name='public'
                                    value='public'
                                    onChange={onInputChange} />
                            Public(all others)
                    </label>
                        </FormGroup>
                    </FormGroup>
                </div>
                <Button style={{ color: 'white', background: '#b17537', border: '2px ridge #9e5110', margin: '2%' }}>Submit</Button>
            </Form>
        </div>
    )
};

export default SignUp;
