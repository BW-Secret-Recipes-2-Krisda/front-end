import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import VintageRecipeCardwithTab from '../components/VintageRecipeCardwithTab.png';
import Axios from 'axios';

const NewRecipes = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        category: '',
        title: '',
        description: '',
        ingredients: '',
        directions: '',
        private: true
    });

    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handlePrefrence = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        });
    };

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const submitData = (e) => {
        e.preventDefault();
        // Axios.post('', formData)
        // .then(res => {
        //     window.location.href='/saved recipes'
        // })

    }
    return (
        <div>
            <Navbar style={{ background: '#b17537' }} light>
                <img style={{ width: '10%', marginRight: '30%' }} src={VintageRecipeCardwithTab} alt='' />
                <NavbarBrand href="/" className="mr-auto"><h1>Add A New Recipe</h1></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} style={{ background: '#edcbd4' }} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink style={{ color: 'black', fontWeight: 'bold' }} href="/savedRecipes">Saved Recipes</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }} caret>
                    {formData.category === '' ? 'Category' : formData.category}
                </DropdownToggle>
                <DropdownMenu style={{ color: 'black' }}>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Appetizers' })
                    }}>
                        Appetizers
                            </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Main Course' })
                    }}>
                        Main Course
                            </div>

                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Side Dish' })
                    }}>
                        Side Dish
                            </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Deserts&Breads' })
                    }}>
                        Deserts&Breads
                            </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Drinks' })
                    }}>
                        Drinks
                            </div>
                    <DropdownItem divider />
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Christmas' })
                    }}>
                        Christmas
                            </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Thanksgiving' })
                    }}>
                        Thanksgiving
                            </div>
                    <div onClick={() => {
                        toggle();
                        setFormData({ ...formData, category: 'Easter' })
                    }}>
                        Easter
                            </div>
                </DropdownMenu>
            </Dropdown>
            <Form style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}
                onSubmit={submitData}>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Title</legend>
                    <Input
                        type='text'
                        name='title'
                        value={formData.title}
                        style={{ border: '2x ridge #b17537' }}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Description</legend>
                    <Input style={{ border: '2x solid #43260f' }}
                        type='textarea'
                        name='description'
                        value={formData.description}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Ingredients</legend>
                    <Input style={{ border: '2x solid #b17537' }}
                        type='textarea'
                        name='ingredients'
                        value={formData.Ingredients}
                        onChange={onInputChange} />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Directions</legend>
                    <Input style={{ border: '2x solid #b17537' }}
                        type='textarea'
                        name='directions'
                        value={formData.directions}
                        onChange={onInputChange} />
                </FormGroup>
                {/* <FormGroup tag='fieldset'>
                    <legend style={{ color: 'black', fontWeight: 'bold' }} >
                        Special appliances needed?
              </legend>
                    <FormGroup check>
                        <Label style={{ color: 'black', fontWeight: 'bold' }} check>
                            <Input type="checkbox"
                                name='standMixer'
                                checked={false} />{' '}
            Stand Mixer
          </Label>
                    </FormGroup>
                </FormGroup>
                <FormGroup check>
                    <Label style={{ color: 'black', fontWeight: 'bold' }} check>
                        <Input type="checkbox"
                            name='microwave'
                            checked={false} />{' '}
            Microwave
          </Label>
                </FormGroup>
                <FormGroup check>
                    <Label style={{ color: 'black', fontWeight: 'bold' }} check>
                        <Input type="checkbox"
                            name='foodProcessor'
                            checked={false} />{' '}
            Food Processor
          </Label>
                </FormGroup>
                <FormGroup check>
                    <Label style={{ color: 'black', fontWeight: 'bold' }} check>
                        <Input type="checkbox"
                            name='juicer'
                            checked={false} />{' '}
            Juicer
          </Label>
                </FormGroup>
                <FormGroup check>
                    <Label style={{ color: 'black', fontWeight: 'bold' }} check>
                        <Input type="checkbox"
                            name='blender'
                            checked={false} />{' '}
            Blender
          </Label>
                </FormGroup> */}
                <div style={{ background: '#ebcdb4', border: '2px ridge #b17537', color: 'black', fontWeight: 'bold' }}>
                    <FormGroup tag='fieldset'>
                        <legend>Uncheck the box below if you want this recipe to be searchable for the public</legend>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type='checkbox'
                                    name='private'
                                    checked={formData.checked}
                                    onChange={handlePrefrence} />
                        Private
                    </Label>
                        </FormGroup>
                    </FormGroup>
                </div>
                <Button style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }}>
                    Submit
                </Button>
            </Form>
        </div >
    )
};

export default NewRecipes;