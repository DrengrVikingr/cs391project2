import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class MongolianBeef extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Mongolian Beef")} title={this.getTitle("Mongolian Beef")} author={this.getAuthor("Mongolian Beef")} description={this.getDesc("Mongolian Beef")} ingredients={this.getIngredients("Mongolian Beef")} instructions={this.getInstructions("Mongolian Beef")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Mongolian Beef";
    }
    getTitle(name) {
        return "Easy Mongolian Beef";
    }

    getAuthor(name) {
        return "Sabrina Snyder";
    }

    getDesc(name) {
        return "Mongolian Beef is a recipe that I’ve been cooking for clients for many years for a number of reasons. One, people love anything that tastes like Chinese takeout.\n" 
        + "Two, the sweet flavor of the dark brown sugar mixed with the salty soy sauce and the strong ginger and garlic is incredibly addicting and three you get to enjoy it over a mountain of steamed rice, which if you are anything like me is your happy place.\n"
        + "This Mongolian Beef is very flavorful and takes just 30 minutes to make from start to finish including all the slicing of the meat! It also uses basic pantry ingredients so don’t worry I am not sending you to the store today for oyster sauce or hoisin sauce. Everything in this recipe is available in every grocery store. The one thing I want to caution when preparing this dish is how thick you slice the steak.\n"
        + "If you feel uncomfortable with cutting the steak thinly enough and have an hour or so notice, place the steak in the freezer for one hour.\n"
        + "This will freeze it just enough that slicing it will be as easy as slicing a vegetable. The meat will firm up enough that you can slice it even thinner if you’d like. One more note because I know I am going to get this question in the comments below.\n"
        + "Yes, you can use light brown sugar in place of dark brown, and yes you will notice the taste difference. The addition of molasses to the dark brown sugar adds to the depth of flavor in this dish.\n"
        + "So if possible please use dark brown sugar. If you are in a pinch and you only have light brown don’t worry you will still have a very tasty meal. Just promise me the next time you make it you will use dark brown sugar, the flavor difference is noticeable.";
}

    getIngredients(name) {
        return "1 pound flank steak\n"
        + "1/4 cup cornstarch\n"
        + "1/4 cup canola oil\n"
        + "2 teaspoons fresh ginger, minced\n"
        + "1 tablespoon garlic, minced\n"
        + "1/3 cup lite soy sauce, low sodium\n"
        + "1/3 cup water\n"
        + "1/2 cup dark brown sugar\n"
        + "4 stalks scallions, green parts only, cut into 2 inch pieces";
    }

    getInstructions(name) {
        return "1.	Slice the flank steak against the grain (the grain is the length of the steak) the long way 1/4 inch think pieces and add it to a ziploc bag with the cornstarch.\n"
        + "2.	Press the steak around in the bag making sure each piece is fully coated with cornstarch and leave it to sit.\n"
        + "3.	Add the canola oil to a large frying pan and heat on medium high heat.\n"
        + "4.	Add the steak, shaking off any excess corn starch, to the pan in a single layer and cook on each side for 1 minute.\n"
        + "5.	If you need to cook the steak in batches because your pan isn't big enough do that rather than crowding the pan, you want to get a good sear on the steak and if you crowd the pan your steak with steam instead of sear.\n"
        + "6.	When the steak is done cooking remove it from the pan.\n"
        + "7.	Add the ginger and garlic to the pan and sauté for 10-15 seconds.\n"
        + "8.	Add the soy sauce, water and dark brown sugar to the pan and let it come to a boil.\n"
        + "9.	Put the steak back in and let the sauce thicken for 20-30 seconds.\n"
        + "10.	The cornstarch we used on the steak should thicken the sauce, if you find it isn't thickening enough add 1 tablespoon of cornstarch to 1 tablespoon of cold water and stir to dissolve the cornstarch and add it to the pan.\n"
        + "11.	Add the green onions, stir to combine everything, and cook for a final 20-30 seconds.\n";}
}

export default MongolianBeef;