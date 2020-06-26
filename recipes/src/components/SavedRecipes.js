import React, { useState, useEffect } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import Axios from 'axios';

import MarketingPage from '../components/MarketingPage.png';
import LogoGold from '../components/LogoGold.png';


const SavedRecipes = () => {
    const image1 = require('./vintageRecipeCardwithTabBlanked.png')
    const [collapsed, setCollapsed] = useState(true);
    const [formData, setFormData] = useState([]);

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        Axios.get('https://secret-recipes-app.herokuapp.com/api/recipes')
            .then(res => {
                console.log('from saved recipes', res);
                setFormData(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    return (
        <>
            <Navbar style={{ background: '#b17537', color: '#ebcdb4' }} light>
                <img style={{ width: '10%' }} src={LogoGold} alt='' />
                <NavbarBrand href="/" style={{ color: 'white' }}>
                    <h1>
                        Secret Family Recipes Saved
                    </h1>
                    <h2 style={{ marginLeft: '15%' }}>Welcome **username**</h2>
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
                            <NavLink href="/homepage" style={{ color: 'white', fontWeight: 'bold' }}>
                                Search Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login" style={{ color: 'white', fontWeight: 'bold' }}>
                                Log In
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} alt='grandmas kitchen inspired baking table with open recipe notebook, wooden spoon, and glass bowls with ingredients inside' />
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                {formData.map((object, index) => {
                    return <Card key={index} style={{ width: '20%', margin: '2%', background: '#b17537', border: '1px ridge #110906 ' }}>
                        <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                            <CardTitle ><h4>{object.title}</h4></CardTitle>
                            <CardSubtitle>{object.category}</CardSubtitle>
                        </CardBody>
                        <img style={{ width: '30%', marginLeft: '35%' }} src={object.img_url ? object.img_url : image1} alt="" />
                        <CardBody style={{ textAlign: 'center', color: '#ebcdb4' }}>
                            <CardText>{object.ingredients}</CardText>
                            <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/viewrecipe">View</CardLink>
                            <CardLink style={{ color: '#ebcdb4', border: '1px ridge #110906 ' }} href="/newrecipeform">Edit</CardLink>
                        </CardBody>
                    </Card>
                })}

            </div>
        </>
    )
};

export default SavedRecipes;