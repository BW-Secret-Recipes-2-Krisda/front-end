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

const ViewRecipe = (title, category, ingredients, instructions, image) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <>
            <Navbar style={{ background: '#b17537', color: '#ebcdb4' }} light >
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
                            <NavLink href="/homepage" style={{ color: '#ebcdb4', fontWeight: 'bold' }}>
                                Search Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/savedrecipes" style={{ color: '#ebcdb4', fontWeight: 'bold' }}>
                                Saved Recipes
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} />
            <div>
                <Card style={{ margin: '3%', border: 'none' }}>
                    <CardBody style={{
                        width: '80%', height: '100vh', margin: '0 auto', display: 'flex', flexDirection: 'column', textAlign: 'center',
                        backgroundImage: "radial-gradient( #b17537 50%,  #ebcdb4 99%)", backgroundPosition: 'center', border: '5px ridge #9e5110', color: 'white', textShadow: '2px 2px #9e5110'
                    }}>
                        <div style={{ marginLeft: '0 auto' }}>
                            <CardTitle>
                                <h2>
                                    Recipe Title
                    </h2>
                            </CardTitle>
                            <CardSubtitle style={{ marginLeft: '3%' }}>
                                <h4>
                                    Category
                        </h4>
                            </CardSubtitle>
                            <CardText>
                                <h5 style={{ margin: '0' }}>
                                    Ingredients
                        </h5>
                                <p style={{ fontSize: '1.2rem' }}>
                                    1 cup butter, softened
                                    1 cup white sugar
                                    1 cup packed brown sugar
                                    2 eggs
                                    2 teaspoons vanilla extract
                                    1 teaspoon baking soda
                                    2 teaspoons hot water
                                    ½ teaspoon salt
                                    3 cups all-purpose flour
                                    2 cups semisweet chocolate chips
                                    1 cup chopped walnuts
                                </p>

                            </CardText>
                            <CardText>
                                <h5>
                                    Directions
                                </h5>
                                <p style={{ fontSize: '1.2rem' }}>
                                    ***STEP 1***<br />
                                Preheat oven to 350 degrees F (175 degrees C).<br />

                                ***STEP 2***<br />
                                Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.<br />

                                ***STEP 3***<br />
                                Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.
                                </p>
                            </CardText>
                            <Button style={{ background: '#9e5110', color: '#ebcdb4', border: '2px solid #ebcdb4' }} href='/newrecipes'>
                                Edit
                    </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    )
};

export default ViewRecipe;