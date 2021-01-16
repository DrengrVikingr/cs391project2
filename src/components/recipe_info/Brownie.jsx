import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class Brownie extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Brownie")} author={this.getAuthor("Brownie")} description={this.getDesc("Brownie")} ingredients={this.getIngredients("Brownie")} instructions={this.getInstructions("Brownie")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Brownie";
    }

    getAuthor(name) {
        return "Jeanine Donofrio";
    }

    getDesc(name) {
        return "For years, I couldn’t seem to find a recipe for brownies that met my standards. Anytime I made homemade brownies, I wanted them to be just like the ones I ate as a kid – super fudgy, moist, and chocolaty, with crispy edges and crackly tops. But the thing is, these brownies didn’t come from a recipe. We always made them from a box. Nowadays, I prefer to bake from scratch, but no brownie recipe I tried could live up to the chocolate brownies of my childhood.\n"
        + "So this fall, as I flipped through Michelle Lopez’s new book Weeknight Baking, her recipe for Boxed Mix Brownies, From Scratch caught my eye. Would I finally be able to make homemade brownies that would be just as delicious as the ones from a box?\n"
        + "The verdict: yes! I’ve had this brownie recipe on repeat since the first time I tried it. It calls for basic pantry ingredients, and it’s hardly more difficult than using a mix. As for the brownies, they’re true perfection – glossy, fudgy, and filled with rich chocolate flavor. Trust me, you’re going to want to make them ASAP!\n"
        + "Another thing you should do ASAP is check out Weeknight Baking! This book is packed with crave-worthy recipes that are meant for busy weeknights.\n"
        + "Each one comes with fun variations (I have my eye on the matcha snickerdoodles) as well as tips for becoming a more efficient baker. After years of juggling a 9-to-5 job and running her blog, Hummingbird High, Michelle is full of wisdom on how to bake on a busy schedule. She writes, “We’re all doing the best we can with what we have. And I’m going to help you bake any night of the week that works for you.” If you love baking, you’ll love this book.";
}

    getIngredients(name) {
        return "1 1/2 cups granulated sugar*\n"
        + "3/4 cup all-purpose flour\n"
        + "2/3 cup cocoa powder, sifted if lumpy\n"
        + "1/2 cup powdered sugar, sifted if lumpy\n"
        + "1/2 cup dark chocolate chips\n"
        + "3/4 teaspoons sea salt\n"
        + "2 large eggs\n"
        + "1/2 cup canola oil or extra-virgin olive oil**\n"
        + "2 tablespoons water\n"
        + "1/2 teaspoon vanilla";
    }

    getInstructions(name) {
        return "1.	Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.\n"
        + "2.	In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.\n"
        + "3.	In a large bowl, whisk together the eggs, olive oil, water, and vanilla. Sprinkle the dry mix over the wet mix and stir until just combined.\n"
        + "4.	Pour the batter into the prepared pan (it'll be thick - that's ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it's better to pull the brownies out early than to leave them in too long).\n"
        + "5.	Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!";    }

}

export default Brownie;