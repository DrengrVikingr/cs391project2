
import React, { Component } from 'react';
import Grocery from '../assets/grocery.png';
import Bake from '../assets/bake.png';



class Recipe extends Component {
    state = {  }
    render() { 
        return (<body onload="getRecipes(); getRecipe(); checkInserted();">
        <div class="pagetitle"> 
    
          <h1 id="name" class="recipe_name"></h1>

          <h3 id="author" class="author"><i></i></h3>
        </div>

        <div id="content"><p id= "description" class="description"></p></div>

        <div id="div_ingredients" >
          <h2><img class="ingredient_icon"  src="../images/grocery.png" /> Ingredients</h2><p id= "ingredients" class = "ingredients"></p></div>

        <div id="div_instructions" >
          <h2><img class="instructions_icon"  src="../images/bake.png" /> Instructions</h2><p id="instructions" class="instructions"></p></div>
        </body>);
    }
}
 
export default Recipe;
