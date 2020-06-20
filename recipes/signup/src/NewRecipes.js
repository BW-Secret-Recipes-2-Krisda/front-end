import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input } from 'reactstrap';

import VintageRecipeCardwithTab from '../src/VintageRecipeCardwithTab.png';

const NewRecipes = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div>
            <Navbar style={{ background: '#b17537' }} light>
                <img style={{ width: '10%' }} src={VintageRecipeCardwithTab} alt='' />
                <NavbarBrand href="/" className="mr-auto"><h1>Add A New Recipe</h1></NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} style={{ background: '#edcbd4' }} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink style={{ color: 'black', fontWeight: 'bold' }} to="/homepage">Home</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }} caret>
                    Category
          </DropdownToggle>
                <DropdownMenu style={{ color: 'black' }}>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Appetizers</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Main Course</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Side Dish</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Deserts & Breads</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Drinks</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem style={{ fontWeight: 'bold' }}>Christmas</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>ThanksGiving</DropdownItem>
                    <DropdownItem style={{ fontWeight: 'bold' }}>Easter</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Form style={{ width: '80%', margin: '0 auto', textAlign: 'center' }} >
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Title</legend>
                    <Input
                        type='text'
                        name='title'
                        style={{ border: '2x ridge #b17537' }} />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Description</legend>
                    <Input style={{ border: '2x solid #43260f' }}
                        type='textarea'
                        name='desctiption' />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Ingredients</legend>
                    <Input style={{ border: '2x solid #b17537' }}
                        type='textarea'
                        name='title' />
                </FormGroup>
                <FormGroup>
                    <legend style={{ color: 'black', fontWeight: 'bold', marginBottom: '0' }}>Directions</legend>
                    <Input style={{ border: '2x solid #b17537' }}
                        type='textarea'
                        name='title' />
                </FormGroup>
                <FormGroup tag='fieldset'>
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
                </FormGroup>
                <div style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold' }}>
                    <FormGroup tag='fieldset'>
                        <legend>Uncheck the box below if you want this recipe to be searchable for the public</legend>
                        <FormGroup check>
                            <label check>
                                <Input
                                    type='checkbox'
                                    name='private'
                                    checked={true} />
                        Private
                    </label>
                        </FormGroup>
                    </FormGroup>
                </div>
            </Form>
        </div >
    )
};

export default NewRecipes;