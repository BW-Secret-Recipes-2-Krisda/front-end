import React, { useState, useEffect } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

import vintageRecipeCardwithTabBlanked from '../components/vintageRecipeCardwithTabBlanked.png';
import MarketingPage from '../components/MarketingPage.png';
import Axios from 'axios';

const SavedRecipes = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        Axios.get('https://secret-recipes-app.herokuapp.com/api/users/:id/recipes')
            .then(res => {
                console.log('from saved recipes', res)
            })

    }, []);

    return (
        <>
            <Navbar style={{ background: '#b17537', color: '#ebcdb4' }} light>
                <NavbarBrand href="/" style={{ color: 'white' }}>
                    <h1>
                        Secret Family Recipes Saved
                    </h1>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' style={{ background: '#ebcdb4' }} />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem >
                            <NavLink href="/newrecipeform" style={{ color: 'white', fontWeight: 'bold' }}>
                                Add New Recipe
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
            <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} />
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
                <Card style={{ width: '20%', margin: '2%', background: '#b17537' }}>
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardTitle >Recipe Title</CardTitle>
                        <CardSubtitle>Category</CardSubtitle>
                    </CardBody>
                    <img style={{ width: '30%', marginLeft: '35%' }} src={vintageRecipeCardwithTabBlanked} alt="Card image cap" />
                    <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="#">View</CardLink>
                        <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                    </CardBody>
                </Card>
            </div>

        </>
    )
};

export default SavedRecipes;