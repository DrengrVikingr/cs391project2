import './Recipe.css';
import React, { Component } from 'react';
import Grocery from '../assets/grocery.png';
import Bake from '../assets/bake.png';



class Recipe extends Component {
  state = {}
  render() {
    return (<body onload="getRecipes(); getRecipe(); checkInserted();">
      <div class="pagetitle">

        <h1 id="name" class="recipe_name">How to Make Chocolate Babka?</h1>

        <h3 id="author" class="author"><i>Cenk Sönmezsoy</i></h3>
      </div>

      <div id="content"><p id="description" class="description">I think it was the first week o the lockdown. My doorbell rang. I hadn’t ordered anything, so I opened the door with caution. Turns out a friend of mine had bought Easter breads (flavored with mastic and mahlab) for her close-knit group of friends from a favorite bakery of mine in İstanbul, called Üstün Palmie. And I was one of those lucky recipients. It came to my door still warm from the bakery and I’ve been obsessed with baking the best version of it at home ever since. More on that later.
        The obsession started with that bread–actually, sweetened and flavored breads are called çörek (pronounced “chö-wreck”) in Turkey–and continued with this wonderful Chocolate Babka, drenched in a dark caramel syrup.</p></div>

      <div id="div_ingredients" >
        <h2><img class="ingredient_icon" src={Grocery} /> Ingredients</h2><p id="ingredients" class="ingredients">For the dough:
        3¾ cups (530 g/18.7oz) all-purpose flour , plus extra for dusting
        ½ cup (100 g/3.5oz) granulated sugar
        1 tablespoon (10g) instant yeast
        3 large eggs
        ½ cup (120 m) water
        ¾ teaspoon fine sea salt
        ⅔ cup (150 g/5.3 oz) unsalted butter , at room temperature, cut into small cubes
        Neutral oil (sunflower, canola) for dressing
        For the chocolate filling:
        ½ cup (50 g/1.7oz) powdered sugar
        130 g (4 oz) dark chocolate , melted*
        ½ cup (120 g/4oz) unsalted butter , melted
        ⅔ cup (120 g/4oz) chocolate chips or chunks OR 1 cup (100g/3.5oz) pecans, coarsely chopped (optional)
        For the chocolate filling:
        ½ cup (120ml) water
½ cup (100g) granulated sugar</p></div>

      <div id="div_instructions" >
        <h2><img class="instructions_icon" src={Bake} /> Instructions</h2><p id="instructions" class="instructions">1.	To make the dough, in the bowl of a stand mixer, stir together the flour and yeast.
        2.	The sugar dissolves. Remove the pan from the heat and let the mixture cool for 10 minutes.
        3.	Whisk the eggs into the cooled milk mixture and pour it over the dry ingredients.Stir with a silicone spatula until the flour is absorbed.
4.	Attach the bowl and the dough hook onto the mixer and beat at medium speed until the dough pulls away from the sides and becomes elastic and smooth, for about 10 minutes. 
        
5.	Halfway into the beating, a portion of the dough may stick to the sides of the bowl and separate from the main dough. In that case, stop the mixer, scrape the sides of the bowl with the spatula and combine the stuck dough with the main dough, then continue beating. 
        
        6.	The dough will be smooth, sticky, and elastic. Scrape the dough into a generously buttered large bowl, cover tightly with lightly buttered plastic wrap, and let rise at room temperature until doubled in size, 60-75 minutes. After the first rise is complete, transfer the dough with the bowl to the refrigerator and chill for 30 minutes.
7.	While the dough chills, make the chocolate filling. In a medium saucepan over medium-low heat, melt the chocolate and butter, stirring occasionally with a wire whisk. Remove the pan from the heat, add the rest of the ingredients and whisk until smooth. Transfer the filling to a bowl and chill, uncovered, until it is thick enough to spread easily, about 15 minutes.
        8.	Generously butter the bottom and sides of two 9-inch (23-cm) loaf pans. Dust the pans with flour and tap out the excess.
9.	Turn the chilled dough out onto a lightly floured work surface. Deflate the dough by pressing down in the center with your palm and roughly shape it into a small rectangle with your hands. Lightly flour the dough and roll it out into a 16-by-24-inch (40-by-60-cm) rectangle. Gently stretch out the rounded corners occasionally to make a neat rectangle, taking care not to tear the dough.
        10.	Using a metal offset spatula, spread the chilled chocolate filling over the surface of the rectangle in an even layer, leaving a 3⁄4-inch (2-cm) border all around. Starting at the long end of the rectangle that is closest to you, roll up the dough tightly and pinch the seam between your fingers to seal. You will have a log that is 24 inches (60 cm) long. Cut the log in half crosswise into two 12-inch (30-cm) logs. Transfer the logs to a cutting board and freeze, uncovered, until firm enough to cut without squishing the layers, 5-10 minutes.</p></div>
        </body>);
            }
}
         
export default Recipe;
  /*  
  
function getRecipe() {
if (localStorage) {
		var recipeIndex = readRecipeIndex("recipes");
		var recipe = JSON.parse(localStorage.getItem(recipeIndex));
		document.getElementById("author").innerHTML = recipe.author;
		document.getElementById("name").innerHTML = recipe.title;
		document.getElementById("description").innerHTML = recipe.description;
		document.getElementById("ingredients").innerHTML = recipe.ingredients;
		document.getElementById("instructions").innerHTML = recipe.instructions;
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function getRecipes() {
    if (localStorage) {
      if (localStorage.getItem("recipeIndex") > 0) {
        var index = localStorage.getItem("recipeIndex");
        for (i = 0; i < index; i++) {
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

function readRecipeIndex(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


function checkInserted() {
  if (localStorage) {
    if (localStorage.getItem("inserted") == null) {
      setTimeout(function(){document.location.href = "../home/index.html";},250);
    }
  }
  else {
    alert("Sorry, your browser does not support local storage");
  }
}*/