import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class CeasarSalad extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Ceasar Salad")} title={this.getTitle("Ceasar Salad")} author={this.getAuthor("Ceasar Salad")} description={this.getDesc("Ceasar Salad")} ingredients={this.getIngredients("Ceasar Salad")} instructions={this.getInstructions("Ceasar Salad")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Ceasar Salad";
    }
    getTitle(name) {
        return "Caesar Salad Recipe";
    }

    getAuthor(name) {
        return "Natasha Kravchuk";
    }

    getDesc(name) {
        return "My son, David, is to thank for this recipe. He is 9 years old and took kids cooking classes at Sur La Table where he learned and fell in love with this caesar salad recipe, so we re-created it at home together. Caesar salad is easy, classic and the ingredients are simple. "
        + "The crunchy homemade garlic croutons really elevate this salad, making it look and taste quite fancy. "
        + "The cheese crusted onto each little toast will have you snacking on these croutons!The caesar salad dressing comes together so fast and all you need is a bowl and whisk. "
        + "This Caesar dressing is light, healthy and packs so much fresh flavor without needing much salt at allIn a large mixing bowl, combine all of your ingredients and toss gently to coat the lettuce in caesar dressing. "
        + "This recipe makes enough croutons for two full salads so you’ll have them ready to go for round 2!";}

    getIngredients(name) {
        return "For the Croutons:\n"
        + "1/2 French Baguette cut in half and thinly sliced (1/4\" thick)\n"
        + "3 Tbsp extra virgin olive oil\n"
        + "1 tsp minced garlic 2 small cloves\n"
        + "2 Tbsp grated parmesan cheese\n"
        + "Caesar Salad dressing:\n"
        + "2 small garlic cloves minced (1 tsp)\n"
        + "2 tsp dijon mustard\n"
        + "1 tsp Worcestershire sauce\n"
        + "2 tsp fresh lemon juice\n"
        + "1 1/2 tsp red wine vinegar\n"
        + "1/3 cup extra virgin olive oil\n"
        + "1/2 tsp sea salt or to taste\n"
        + "1/8 tsp black pepper plus more to serve\n"
        + "For the Caesar Salad:\n"
        + "1 large romaine lettuce (or 2 small heads romaine)\n"
        + "1/3 cup parmesan cheese shredded or shaved";
}

    getInstructions(name) {
        return "1.	Preheat oven to 350˚F. Cut the baguette in half lengthwise through the top of the baguette then slice diagonally into 1/4\" thick pieces. Place the breads onto a baking sheet.\n"
        + "2.	In a small bowl, combine 3 Tbsp extra virgin olive oil and 1 tsp of finely minced garlic. Drizzle the garlic oil over the croutons and sprinkle the top with 2 Tbsp grated parmesan cheese.\n"
        + "3.	Toss until evenly coated. Spread in a single layer over the baking sheet and bake at 350˚F until light golden and crisp (10-12 minutes), or to desired crispness.\n"
        + "How to Make Caesar Salad Dressing:\n"
        + "1.	In a small bowl, whisk together garlic, dijon, Worcestershire, lemon juice and red wine vinegar.\n"
        + "2.	Slowly drizzle in extra virgin olive oil while whisking constantly.\n"
        + "Whisk in 1/2 tsp salt and 1/8 tsp black pepper, or season to taste.\n"
        + "How to Make Caesar Salad:\n"
        + "1.	Rinse, dry and chop or tear the romaine into bite-sized pieces.\n"
        + "2.	Place in a large serving bowl and sprinkle generously with shredded parmesan cheese and cooled croutons.\n"
        + "3.	Drizzle with caesar dressing and toss gently until lettuce is evenly coated.";}

}

export default  CeasarSalad;