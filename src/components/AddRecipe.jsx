import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "",
      name: "",
      author: "",
      ingredients: "",
      description: "",
      instructions: ""
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleInstructionsChange = this.handleInstructionsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAuthorChange(event) {
    this.setState({ author: event.target.value });
  }

  handleIngredientsChange(event) {
    this.setState({ ingredients: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleInstructionsChange(event) {
    this.setState({ instructions: event.target.value });
  }

  handleSubmit(event) {
    var myrecipe = {
      "category": this.state.category, "author": this.state.author,
      "name": this.state.name, "description": this.state.description,
      "ingredients": this.state.ingredients, "instructions": this.state.instructions
    }
    localStorage.setItem(this.state.name, JSON.stringify(myrecipe));
    alert("Your Recipe has been added !! Its Yummy...");
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mb-3">
        <Form.Group controlId="category">
          <Form.Label>Select the category</Form.Label>
          <Form.Control onChange={this.handleCategoryChange} value={this.state.category} as="select">
            <option>Main Dishes</option>
            <option>Starters</option>
            <option>Desserts</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Give a name to your recipe</Form.Label>
          <Form.Control onChange={this.handleNameChange} value={this.state.name} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Add an author to your recipe</Form.Label>
          <Form.Control onChange={this.handleAuthorChange} value={this.state.author} as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="ingredients">
          <Form.Label>Add a Ingredients to your recipe</Form.Label>
          <Form.Control onChange={this.handleIngredientsChange} value={this.state.ingredients} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Add a description to your recipe</Form.Label>
          <Form.Control onChange={this.handleDescriptionChange} value={this.state.description} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="instructions">
          <Form.Label>Add the instructions of your recipe</Form.Label>
          <Form.Control onChange={this.handleInstructionsChange} value={this.state.instructions} as="textarea" rows={3} />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />

      </Form>
    );
  }

  /*
  function getRecipes() {
    if (localStorage) {
      if (localStorage.getItem("recipeIndex") > 0) {
        var index = localStorage.getItem("recipeIndex");
        for (var i = 0; i < index; i++) {
          var recipe = JSON.parse(localStorage.getItem("recipe" + i));
          var option = document.getElementById(recipe.category);
          var recipeOpt = document.createElement("option");
          recipeOpt.text = recipe.name;
          recipeOpt.value = recipe.index;
          option.appendChild(recipeOpt);
        }
      }
    } else {
      alert("Sorry, your browser does not support local storage");
    }
  
  */

}
export default AddRecipe;