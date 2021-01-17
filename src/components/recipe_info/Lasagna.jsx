import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class Lasagna extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Lasagna")} title={this.getTitle("Lasagna")} author={this.getAuthor("Lasagna")} description={this.getDesc("Lasagna")} ingredients={this.getIngredients("Lasagna")} instructions={this.getInstructions("Lasagna")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Lasagna";
    }
    getTitle(name) {
        return "The Most Amazing Lasagna!";
    }

    getAuthor(name) {
        return "Rachel Farnsworth";
    }

    getDesc(name) {
        return "There are three kinds of cheese in this recipe. First you have the classic lasagna filling of ricotta cheese. Use whole milk ricotta cheese in this recipe for best results. The second cheese is sliced mozzarella. We like to get our mozzarella sliced at the deli counter in our grocery store. You want the slices to be pretty thin. 24 slices is the ideal amount and it should equal somewhere around one pound. Third, you’ll need freshly grated Parmesan cheese. Don’t use shredded, you’ll want grated for best results. Also, don’t use that canned stuff. It doesn’t melt the same as real, freshly grated Parmesan cheese.\n"
        + "\n"
        + "DO I NEED TO USE TOMATO PASTE?\n"
        + "You’ll notice that two cans of tomato paste are used in this recipe. It may seem like a lot, but tomato paste has a super concentrated tomato flavor. By adding in so much, we’re able to get a nice, strong tomato flavor, without adding too much liquid to the sauce.\n"
        + "\n"
        + "DO I HAVE TO USE FENNEL SEEDS?\n"
        + "The blend of herbs included in this bolognese is perfect. The fresh herbs all combine to produce the best flavor, and the key to bringing it all together: fennel seeds. You need the fennel seeds for that authentic, Italian flavor.\n"
        + "\n"
        + "WHY IS THERE SUGAR IN THE SAUCE?\n"
        + "Sugar is added to balance the acidity of the tomato. If you prefer to not use sugar, finely chopped carrots are another option, as they are naturally sweet and add another vegetable and flavor to your sauce. Use about a cup in place of the sugar.\n"
        + "\n"
        + "DO I HAVE TO SIMMER THE SAUCE FOR SO LONG?\n"
        + "The sauce develops flavor as it simmers. It needs to be simmered for a minimum of 1 hour to give you the most amazing lasagna, but you can simmer it up to 4 hours for maximum flavor results. It’s worth every second and doesn’t require much effort at all. If you don’t want to leave it simmering on the stove, you can always transfer it all to a slow cooker and simmer it in there on high for 4 hours or low for 6 to 8 hours.\n"
        + "\n"
        + "CAN I USE DRIED HERBS IN THIS RECIPE?\n"
        + "Yes. We love the flavor that comes from the fresh herbs, but we know that it isn’t always an option. If you need to use dried herbs, use them in a third of the amount of fresh herbs called for.\n"
        + "\n"
        + "WHAT IS A LASAGNA PAN? CAN I JUST USE A REGULAR 9×13 PAN?\n"
        + "Lasagna Pans are not the same as 9 x 13 casserole pans. Lasagna pans are deeper in order to accommodate for the layers in the dish. A true lasagna has four layers of noodles, which usually fit pretty nicely in a lasagna pan. If you like lasagna, it is a great investment";
}

    getIngredients(name) {
        return "1 pound sweet Italian sausage\n"
        + "1 pound lean ground beef\n"
        + "1 large white onion diced\n"
        + "5 cloves garlic minced\n"
        + "1 (28 ounce) can crushed tomatoes\n"
        + "2 (6 ounce) cans tomato paste\n"
        + "1 (15 ounce) can tomato sauce\n"
        + "1/2 cup white wine\n"
        + "2 tablespoons white sugar\n"
        + "1/2 cup chopped fresh basil\n"
        + "1 teaspoon fennel seeds\n"
        + "1 teaspoon ground oregano\n"
        + "1/2 teaspoon salt\n"
        + "1/4 teaspoon ground black pepper\n"
        + "1/4 cup chopped fresh parsley\n"
        + "1 pound lasagna noodles\n"
        + "30 ounces ricotta cheese\n"
        + "2 tablespoons chopped fresh parsley\n"
        + "1 large egg";
    }

    getInstructions(name) {
        return "1.	In a large pot over medium heat, add in ground sausage and ground beef. Use a spoon to break up the meat into small pieces. Add in onion and garlic and cook until meat is well browned, stirring constantly. Stir in sugar, fresh basil, fennel, oregano, 1/2 teaspoon salt, pepper, and 1/4 cup chopped parsley. Pour in crushed tomatoes, tomato paste, tomato sauce, and wine*. Stir well and bring to a simmer. Reduce heat to low and simmer 1-4 hours, stirring occasionally.\n"
        + "2.	Meanwhile, place lasagna noodles into the bottom of a pan. Pour hot tap water directly over the noodles, making sure the pasta is completely immersed in the water. Let them soak for 30 minutes, then drain and discard water.\n"
        + "3.	In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, 1/2 teaspoon salt, and nutmeg. Refrigerate until ready to assemble lasagna. Preheat oven to 375 degrees. Lightly grease a deep 9x13 pan.\n"
        + "4.	To assemble, spread about 1 cup of meat sauce in the bottom of the prepared pan. Place 4 noodles on top. Spread with 1/3 of the ricotta cheese mixture. Top with 1/4 of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, then sprinkle with 1/4 cup parmesan cheese. Repeat layering two more times to create three complete layers. To finish, place a final layer of pasta, topped with another 1 cup of meat sauce to cover the pasta. Top with remaining mozzarella and Parmesan cheese. Cover loosely with aluminum foil.\n"
        + "5.	Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes to allow cheese to brown. Serve hot.";}
}

export default Lasagna;