import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

import MarketingPage from './MarketingPage.png';



const SignUp = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [post, setPost] = useState([]);
    const [serverError, setServerError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
    });
    const toggleNavbar = () => setCollapsed(!collapsed);
    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    // const handlepreferences = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.checked
    //     });
    // };

    const signupSchema = yup.object().shape({
        name: yup.string().required('Please enter your legal name'),
        username: yup.string().required('You will need this to sign into your account'),
        password: yup.string().required('Please enter your password').min(9)

    });

    useEffect(() => {
        signupSchema.validate(formData)
            .then(valid => {
                console.log('valid?', valid);
            })
            .catch(err => {
                console.log(err.errors);
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
                });
            })
            .catch(res => {
                setServerError('Wait, What ?!');
                console.log('from catch', res)
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
            {serverError ? <p className="error">{serverError}</p> : null}
                <FormGroup>
                    <legend>Name</legend>
                    <Input style={{ border: '2px ridge #9e5110' }}
                        type='name'
                        name='name'
                        value={formData.name}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a User Name</legend>
                    <Input style={{ border: '2px ridge #9e5110' }}
                        type='text'
                        autoComplete='username'
                        name='username'
                        value={formData.username}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend>Choose a Password</legend>
                    <Input style={{ border: '2px ridge #9e5110' }}
                        type='password'
                        autoComplete='new-password'
                        name='password'
                        value={formData.password}
                        onChange={onInputChange} />
                </FormGroup>
                {/* <div style={{ width: '30%', margin: '0 auto', border: '2px ridge #9e5110', background: '#b17537', color: 'white' }}>
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
                </div> */}

                <pre>{JSON.stringify(post, null, 2)}</pre>
                <Button style={{ color: 'white', background: '#b17537', border: '2px ridge #9e5110', margin: '2%' }}>Submit</Button>
            </Form>
        </div>
    )
};

export default SignUp;
