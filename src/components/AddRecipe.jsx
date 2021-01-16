import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';


class AddRecipe extends Component {

  state = {}
  render() {
    return (
      <body onload="getRecipes();">
        <h4>Step 1</h4>
        <DropdownButton variant="outline-dark" size="sm" id="dropdown-basic-button" title="Choose a category" >
          <Dropdown.Item href="#/action-1">Starters</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Main Dishes</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Desserts</Dropdown.Item>
        </DropdownButton>
        <br />
        <h4>Step 2</h4>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl size="sm" placeholder="Give a name to your recipe" as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br />
        <h4>Step 3</h4>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl size="sm" placeholder="Add an author to your recipe" as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br />
        <h4>Step 4</h4>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl size="sm" placeholder="Add your ingredients" as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br />
        <h4>Step 5</h4>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl size="sm" placeholder="Add a description to your recipe" as="textarea" aria-label="With textarea" />
        </InputGroup>
        <br />
        <h4>Step 6</h4>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text></InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl size="sm" placeholder="Describe your recipe with more details" as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Button variant="outline-dark">Done</Button>{' '}
      </body>
    );
  }
}





function addRecipe() {
  if (localStorage) {

    var myrecipe = {
      "category": document.getElementById("recipe_category").value, "author": document.getElementById("recipe_author").value,
      "name": document.getElementById("recipe_name").value, "title": document.getElementById("recipe_name").value, "description": document.getElementById("recipe_desc").value,
      "ingredients": document.getElementById("ingredients").value, "instructions": document.getElementById("instructions").value, "index": "recipe" + index
    }
    localStorage.setItem("recipe" + index, JSON.stringify(myrecipe));
    localStorage.setItem("recipeIndex", ++index);
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