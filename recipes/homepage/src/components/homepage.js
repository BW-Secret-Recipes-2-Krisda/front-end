import React from 'react';
import './homepage.css';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import history from './history';
import MarketingPage from './MarketingPage.png';
import { search, getRecipes, selectRecipe } from '../actions'
import RecipeList from './RecipeList';

class homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchCriteria:""
    }
  }

  componentDidMount() {
    this.props.getRecipes();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchCriteria &&
      prevProps.searchCriteria !== this.props.searchCriteria) 
      {
          this.setState({
            searchCriteria:this.props.searchCriteria
      });
      }
    }

    selectRecipe = recipe =>{
      this.props.selectRecipe(recipe);
    }

  submitSearch = event => {
    event.preventDefault();
    this.props.search(this.state.searchCriteria);
    this.setState({
      searchCriteria:""
    })
    this.props.getRecipes();
  }

  searchHandler= event =>{
    event.persist();
    this.setState({
        [event.target.name]: event.target.value 
    });
  }

  logoutButton = e => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/login');
  };

  render() {

    return (
      <div className="homepage-container">
        <img style={{ width: '100%', height: '40vh' }} src={MarketingPage} alt='' />
        <h1 style={{ color:'#533215' }}>Secret Family Recipes</h1>
        
        <form onSubmit={this.submitSearch} className="searchbar-form">
          <input
            onChange={this.searchHandler}
            placeholder="Asian"
            value={this.state.searchCriteria}  
            name="searchCriteria"
          /> 
             
          <button type="submit">Search</button>
        </form>
        
        {this.props.fetchingRecipes ? <p>Searching...</p> : <RecipeList updateRecipe={this.updateRecipe} selectRecipe={this.selectRecipe}/>}
        
        <div>
          <Button variant="btn btn-success" onClick={() => history.push('/SavedRecipes')}>Add Recipe</Button>
          <button onClick={this.logoutButton}>Logout</button>
          <p />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  fetchingRecipes: state.fetchingRecipes,
  selectedRecipe: state.selectedRecipe,
  filteredRecipes: state.filteredRecipes,
});

export default
  connect(
    mapStateToProps,
    { search, getRecipes, selectRecipe }
  )(homepage);

