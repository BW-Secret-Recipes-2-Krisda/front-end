import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

import MarketingPage from '../src/MarketingPage.png';



const SignUp = () => {
    const [errors, setErrors] = useState('');
    const [collapsed, setCollapsed] = useState(true);
    const [post, setPost] = useState([]);
    const [serverError, setServerError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        private: true
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

    const signupSchema = yup.object().shape({
        name: yup.string().required('Please enter your legal name'),
        username: yup.string().required('You will need this to sign into your account'),
        password: yup.string().required('Please enter your password').matches(
            "^(?=.*[A-Za-z])(?=.*d){8,}$",
            "Must Contain 8 Characters, One Uppercase, One Lowercase, and one Number"
        ),
        private: yup.boolean().oneOf[true]

    });

    const validateChange = e => {
        yup
            .reach(signupSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                console.log('from catch', err)
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]

                });
            });
    };

    useEffect(() => {
        signupSchema.isValid(formData)
            .then(valid => {
                console.log('valid?', valid);
            })
    }, [formData]);

    const submitData = e => {
        e.preventDefault();
        axios.post('https://secret-recipes-app.herokuapp.com/api/auth/register', formData)
            .then(res => {
                setPost(res.data);
                console.log('API success!');
                setServerError(null);
                setFormData({
                    name: '',
                    username: '',
                    password: '',
                    private: true
                });
            })
            .catch(res => {
                setServerError('Wait, What ?!');
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
            <Form style={{ width: '80%', margin: '0 auto', textAlign: 'center' }} onSubmit={submitData} >
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
                    <h5>Uncheck this box if you want your recipes to be searchable for others</h5>
                    <FormGroup tag='fieldset'>
                        <FormGroup check>
                            <label check>
                                <Input
                                    type='checkbox'
                                    name='private'
                                    checked={formData.private}
                                    onChange={handlepreferences} />
                        Private
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
