import React, { useState, useEffect } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Axios from 'axios';

import MarketingPage from '../components/MarketingPage.png';
import LogoGold from '../components/LogoGold.png';
import vintageRecipeCardwithTabBlanked from '../components/vintageRecipeCardwithTabBlanked.png';
import { Link } from 'react-router-dom';

const ViewRecipe = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar style={{ background: '#b17537', color: '#ebcdb4' }} light>
                <img style={{ width: '10%' }} src={LogoGold} alt='' />
                <NavbarBrand href="/" style={{ color: 'white' }}>
                    <h1>
                        Secret Family Recipes
                    </h1>
                    <h2 style={{ marginLeft: '23%' }}>**Recipe Title**</h2>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' style={{ background: '#ebcdb4' }} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem >
                            <NavLink href="/newrecipeform" style={{ color: '#ebcdb4', fontWeight: 'bold' }}>
                                Add New Recipe
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" style={{ color: '#ebcdb4', fontWeight: 'bold' }}>
                                Search Recipes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} />
            <div>
                <Card style={{ background: '#b17537', border: '1px ridge #110906', width: '80%', margin: '0 auto' }}>
                    <CardImg style={{ width: '20%', margin: '0 auto' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle style={{ fontWeight: 'bold' }}>
                            Description
                        </CardTitle>
                        <CardText>**This will be where the description will go**</CardText>
                        <CardTitle style={{ fontWeight: 'bold' }}>
                            Ingredients
                        </CardTitle>
                        <CardText>**This will be where the ingredients show**
                        </CardText>
                        <CardTitle style={{ fontWeight: 'bold' }}>
                            Directions
                        </CardTitle>
                        <CardText>**This will be where the directions show**
                        </CardText>
                        <Link to='/newrecipeform'>
                            <Button style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }}>
                                Edit
                        </Button>
                        </Link>
                        <Button style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }}>
                            Delete
                        </Button>
                        <Button style={{ background: '#ebcdb4', color: 'black', fontWeight: 'bold', border: '2px solid #43260f' }}>
                            Save
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </>
    )
};

export default ViewRecipe;