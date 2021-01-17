import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class AddRecipe extends Component {

  state = {}
  render() {
    return (
      <Form className="mb-3">
        <Form.Group controlId="category">
          <Form.Label>Select the category</Form.Label>
          <Form.Control as="select">
            <option>Main Dishes</option>
            <option>Starters</option>
            <option>Desserts</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Give a name to your recipe</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Add an author to your recipe</Form.Label>
          <Form.Control as="textarea" rows={1} />
        </Form.Group>
        <Form.Group controlId="ingredients">
          <Form.Label>Add a Ingredients to your recipe</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Add a description to your recipe</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group controlId="instructions">
          <Form.Label>Add the instructions of your recipe</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button onClick={this.addRecipe()} as="input" type="submit" value="Submit" />

      </Form>
    );
  }
  addRecipe() {
    if (localStorage) {

      var myrecipe = {
        "category": document.getElementById("category").value, "author": document.getElementById("author").value,
        "name": document.getElementById("name").value, "description": document.getElementById("description").value,
        "ingredients": document.getElementById("ingredients").value, "instructions": document.getElementById("instructions").value
      }
      localStorage.setItem(document.getElementById("recipe_name").value, JSON.stringify(myrecipe));
      console.log(localStorage);
    }
    else {
      alert("Sorry, your browser does not support local storage");
    }
  }
}





function addRecipe() {
  if (localStorage) {

    var myrecipe = {
      "category": document.getElementById("category").value, "author": document.getElementById("author").value,
      "name": document.getElementById("name").value, "description": document.getElementById("description").value,
      "ingredients": document.getElementById("ingredients").value, "instructions": document.getElementById("instructions").value
    }
    localStorage.setItem(document.getElementById("recipe_name").value, JSON.stringify(myrecipe));
    console.log(localStorage);
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}

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
}



export default AddRecipe;