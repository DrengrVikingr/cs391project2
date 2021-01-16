import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class Falafel extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Falafel")} title={this.getTitle("Falafel")} author={this.getAuthor("Falafel")} description={this.getDesc("Falafel")} ingredients={this.getIngredients("Falafel")} instructions={this.getInstructions("Falafel")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Falafel";
    }
    getTitle(name) {
        return "Falafel";
    }

    getAuthor(name) {
        return "Lisa Bryan";
    }

    getDesc(name) {
        return "Falafel are delicious balls of chickpea and herb goodness that you find in Middle Eastern cooking. Naturally vegan and vegetarian, falafel are great in wraps, pitas, sandwiches and salads. Today, I’ll share how to make both fried falafel and baked falafel. You choose your favorite! "
        + "Are you ready for the best falafel you’ve ever tasted? I’ve had my fair share of falafel on travels through Egypt, Israel and Jordan. " 
        + "I’ve had them in restaurants and on street corners (about as authentic as they come). I’ve had them stuffed in gluten-free pita and on salads. And I’ve had them with slight variations and tweaks, though the recipe itself is fairly simple. "
        + "But after eating my way through Tel Aviv last year, I realised what makes the best falafel. And here’s the answer: tons of herbs (double the normal amount) and a small amount of green pepper. "
        + "This makes for an addictive flavor that’s “a little something extra” but not spicy. Just insanely delicious.Traditional falafel is made from ground chickpeas or fava beans, herbs and spices. "
        + "The mixture is then formed into balls or patties and deep fried for a texture that’s crispy on the outside and soft on the inside, sort of like a fritter. It’s a classic Middle Eastern and Mediterranean recipe that’s enjoyed as street food and often served up as part of mezze (a group of small meals). ";
}

    getIngredients(name) {
        return "1 cup dried chickpeas, soaked overnight (don't use canned chickpeas)\n"
        + "1/2 cup onion, roughly chopped\n"
        + "1 cup parsley, roughly chopped (about a one large bunch)\n"
        + "1 cup cilantro, roughly chopped (about a one large bunch)\n"
        + "1 small green chile pepper, serrano or jalapeno pepper\n"
        + "3 garlic cloves\n"
        + "1 tsp cumin\n"
        + "1 tsp salt\n"
        + "1/2 tsp cardamom\n"
        + "1/4 tsp black pepper\n"
        + "2 tbsp chickpea flour\n"
        + "1/2 tsp baking soda\n"
        + "avocado oil for frying";
    }

    getInstructions(name) {
        return "1.	The night before, soak the dried chickpeas in water. Make sure the water covers the chickpeas by 2-3 inches, as they'll triple in size. Dried chickpeas soaking in a bowl of water.\n"
        + "2.	Drain and rinse the chickpeas and add them to your food processor, along with the onion, parsley, cilantro, pepper, garlic, cumin, salt, cardamom and black pepper.\n"
        + "3.	Pulse the food processor several times until the mixture resembles the texture of coarse sand.\n"
        + "4.	Transfer the falafel mixture to a bowl and add the chickpea flour and baking soda. Stir together, then cover or add a lid and refrigerate the mixture for 30 minutes to one hour. Falafel ingredients in a mixing bowl.\n"
        + "5.	Use your hands, an ice cream scoop or falafel scoop to form the falafel into balls or patties. If you find the mixture is too wet, you can add another tablespoon of chickpea flour. If it's too dry and crumbly, you can add a teaspoon or two of water or lemon juice. Scooping balls of falafel from the raw mixture.\n"
        + "6.	Once the falafel are formed, you can cook them by your preferred method mentioned above. To deep fry the falafel, add about 3 inches of oil to a pot on medium heat. Heat the oil to 350F. Cook the falafel in batches (about 6-8 at a time) for 1-2 minutes or until golden.\n"
        + "7.	Cooking the falafel in a pan of oil on the stove.\n"
        + "Use a skimmer to check the color of the falafel and make sure they don't over cook. Then remove them to a paper towel-lined plate.\n"
        + "Removing the falafel from the pan once they're cooked and golden.\n"
        + "Serve the falafel immediately, while warm and crispy on the outside. They're delicious served with tahini sauce as well.\n";}

}

export default Falafel;