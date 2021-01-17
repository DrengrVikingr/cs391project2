import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class TuscanChicken extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Tuscan Chicken")} title={this.getTitle("Tuscan Chicken")} author={this.getAuthor("Tuscan Chicken")} description={this.getDesc("Tuscan Chicken")} ingredients={this.getIngredients("Tuscan Chicken")} instructions={this.getInstructions("Tuscan Chicken")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Tuscan Chicken";
    }
    getTitle(name) {
        return "Stuffed Tuscan Chicken";
    }

    getAuthor(name) {
        return "Jessica Gavin";
    }

    getDesc(name) {
        return "It’s convenient to grab a pack of chicken breasts from the market, but the big question is how to turn it into something special. To spice things, try stuffing them with a savory vegetable and cheese mixture. As the protein cooks, the filling gets hot and bubbly, infusing the aromatic garlic and herb flavors into each piece.\n"
        + "The chicken cooks in one skillet to make preparation effortless. Once stuffed, the meat sears until golden on each side, then finishes in the oven for gentle cooking. A delicious low carb and keto-friendly entree to feed a family or reheat for meal prep. Pair with your favorite side dishes like crispy green beans or tender broccoli for a complete meal.\n"
        + "The stuffing is easy to prepare. Just chop and mix! Softened cream cheese is the base, binding the ingredients together and providing a creamy, tangy taste. For a Tuscan-inspired flavor, I looked to fresh greens, herbs, and sundried tomatoes. Fresh spinach, basil, parsley, chives, and garlic provide herbaceous and earthy notes. \n"
        + "The tomatoes concentrate their sweetness during baking and prevent the filling from getting watery as it cooks. Parmesan cheese adds a nutty taste, and gooey melt when sliced. For a quick pantry swap, 1 tablespoon of dried Italian seasoning can be substituted for the herbs.\n"
        + "I recommend using chicken breasts that are about 6 to 8 ounces. This size provides a thick enough piece to slice and fill. The smaller size will cook quicker, so you may need to reduce the time in the oven slightly.;\n"
        +"A pocket to hold the filling needs to be cut into the thickest side of the meat. Start by placing the breast on a cutting board and grabbing a sharp utility or paring knife. Hold the knife parallel to the board and cut a slit through the chicken’s side down the middle, about 5 inches.\n"
        + "Be sure not to cut all the way through. You want to make sure there are no holes in the pocket. Otherwise, the stuffing will ooze out. I find it easiest to season the surface with salt and pepper before adding the filling.";
}

    getIngredients(name) {
        return "4 boneless skinless chicken breast, about 2 ½ to 3 pounds total\n"
        + "1 ½ teaspoon kosher salt, divided\n"
        + "¾ teaspoon black pepper, divided\n"
        + "4 ounces cream cheese, softened 60 to 65ºF (15 to 18ºC)\n"
        + "½ cup grated parmesan cheese\n"
        + "2 cups baby spinach, loosely packed, finely chopped\n"
        + "¼ cup sun-dried tomatoes, in oil, chopped\n"
        + "1 tablespoon chopped basil\n"
        + "1 tablespoon chopped parsley"
        + "1 tablespoon sliced chives, or green onions\n"
        + "1 teaspoon minced garlic, or ½ teaspoon garlic powder\n";
    }

    getInstructions(name) {
        return "1.	Set the oven rack to the lower-middle position. Preheat to 375ºF (191ºC).\n"
        + "2.	On the thickest side of the chicken breast, cut about a 4 to 5-inch long slit. Continue to cut a 2 to 3-inch deep pocket, leaving about a 1-inch uncut area to keep the other side connected. Make sure not to cut through the bottom. Repeat with the remaining pieces.\n"
        + "3.	In a small bowl, combine 1 teaspoon salt and ½ teaspoon black pepper. Evenly season each side of the chicken with the mixture.\n"
        + "4.	In a medium bowl, combine softened cream cheese, parmesan cheese, spinach, sun-dried tomato, basil, parsley, chives, garlic, ½ teaspoon salt, and ¼ teaspoon black pepper.\n"
        + "5.	Evenly spread the cheese mixture into the pocket of each chicken breast, about 2 to 4 tablespoons, do not overfill. If desired, close the opening with toothpicks.\n"
        + "6.	Heat a large oven-proof skillet or Dutch oven over medium heat. Once the pan is hot, add the olive oil.\n"
        + "7.	Add the chicken, presentation side up, lightly press the meat down to make contact with the pan. Cook until golden brown on the surface, about 5 to 7 minutes. Flip over and cook for 5 minutes. If using smaller chicken breasts, check for doneness as baking may not be needed.\n"
        + "8.	Transfer the pan to the oven. Bake until the meat is no longer pink and the internal temperature reaches 160 to 165ºF (71 to 74ºC), about 8 to 12 minutes depending on the thickness of the meat. Rest the chicken for 5 minutes, then serve hot.\n";}
}

export default TuscanChicken;