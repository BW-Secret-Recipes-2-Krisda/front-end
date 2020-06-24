import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import history from './history';

const RecipeCard = styled.div`
    width:30%;
    margin: 2%;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    padding:2%;
    background: #ebcdb4;
    border: 2px solid #9e5110;
    font-size: 1.2rem;
    &:hover{
        background: #110906;
        color: #d29c60;
    }
    h4{
        align-self: center;
        text-align:center;
        margin-top: 1%;
        margin-bottom:0;
    }
    h5{
        margin: 0.5%;
        text-align:right;
    }
    p{
        margin: 1%;
        padding: 2%;
    }
    button {
        margin: 2%;
        align-self:center;
        font-size: 0.9rem;
        padding: 1%;
        border: 2px solid #9e5110;
        &:hover{
            background: #110906;
            color: #d29c60;
        }
    }

`

const Recipe = props =>{
    return (
        <RecipeCard>
            <h4>{props.recipe.title}</h4>
            <h5>Ingredients:</h5>
            <p>{props.recipe.ingredients}</p>
            <h5>Instructions:</h5>
            <p>{props.recipe.instructions}</p>
            <h5>Source:</h5>
            <p>{props.recipe.source}</p>
            <h5>Category:</h5>
            <p>{props.recipe.category}</p>
            <h5>Image:</h5>
            <img alt="meaningful text" value={props.recipe.img_url} />
            <Button variant="btn btn-success" onClick={() => history.push('/SavedRecipes')}>Update Recipe</Button>
        </RecipeCard>
    )
}

export default Recipe;
