import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class PotatoLeekSoup extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Potato Leek Soup")} title={this.getTitle("Potato Leek Soup")} author={this.getAuthor("Potato Leek Soup")} description={this.getDesc("Potato Leek Soup")} ingredients={this.getIngredients("Potato Leek Soup")} instructions={this.getInstructions("Potato Leek Soup")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Potato Leek Soup";
    }
    getTitle(name) {
        return "A French Classic Potato Leek Soup";
    }

    getAuthor(name) {
        return "Jenn Segal";
    }

    getDesc(name) {
        return "It rained, sleeted, and snowed all day last Saturday, and I loved it every minute of it. The kids stayed in their pajamas and watched movies all day, my husband made a roaring fire (and filled our house with smoke, but that’s another story), and I made a big pot of potato leek soup.\n"
        + "Potato leek soup, or potage parmentier, is a French classic. It’s one of the first dishes I learned to make in culinary school, right after a proper omelet, because it’s an essential base soup in French cuisine. Add watercress for potage au cresson, serve it chilled for Vichyssoise — or top it with bacon, fried leeks, fresh herbs, or diced vegetables. There are endless variations; just use your imagination to make it your own.\n"
        + "Potato leek soup is simple to make, but first you have to deal with the leeks. They’re notoriously sandy and dirty, and very good at hiding it, so be sure to wash them well. Start by cutting off and discarding the root ends and thick dark green parts. Cut the leeks in half lengthwise and rinse each half under cold water, pulling apart the layers to remove any grit that’s tucked inside.\n"
        + "Once the leeks are clean, roughly chop them — you should get about five cups of chopped leeks from four large leeks.\n"
        + "To make the soup, melt the butter in a large soup pot, then add the chopped leeks and garlic.\n"
        + "Cook, stirring occasionally, until soft and wilted. Next, add the potatoes, chicken broth, bay leaves, thyme, salt and pepper."
        + "Bring to a boil. Then cover, reduce the heat, and simmer for 15 minutes, or until the potatoes are tender. Fish out the bay leaves and thyme sprigs.\n"
        + "Then purée the soup with a hand-held immersion blender (or in a regular blender) until smooth.  (If using a standard blender, be sure not to fill the jar more than halfway; leave the hole in the lid open and cover loosely with a dishtowel to allow the heat to escape.)\n"
        + "Finally, add the heavy cream. You can reduce the amount if you’d like but I wouldn’t leave it out completely. Cream makes the soup deliciously silky, rich, and smooth — just add it little by little until the soup tastes good to you.\n";
}

    getIngredients(name) {
        return "3 tablespoons unsalted butter\n"
        + "4 large leeks, white and light green parts only, roughly chopped (about 5 cups)\n"
        + "3 cloves garlic, peeled and smashed\n"
        + "2 pounds Yukon Gold potatoes, peeled and roughly chopped into 1/2-inch pieces\n"
        + "7 cups low sodium chicken or vegetable broth\n"
        + "2 bay leaves\n"
        + "3 sprigs fresh thyme\n"
        + "1 teaspoon salt\n"
        + "1/4 teaspoon ground black pepper"
        + "1 cup heavy cream\n"
        + "Chives, finely chopped, for serving\n";
    }

    getInstructions(name) {
        return "1.	Melt the butter over medium heat in a large soup pot. Add the leeks and garlic and cook, stirring regularly, until soft and wilted, about 10 minutes. Adjust the heat as necessary so as not to brown.\n"
        + "2.	Add the potatoes, broth, bay leaves, thyme, salt and pepper to pot and bring to a boil. Cover and turn the heat down to low. Simmer for 15 minutes, or until the potatoes are very soft.\n"
        + "3.	Fish out the thyme sprig and bay leaves, then purée the soup with a hand-held immersion blender until smooth. (Alternatively, use a standard blender to purée the soup in batches; see note.) Add the heavy cream and bring to a simmer. Taste and adjust seasoning with salt and pepper. If soup is too thin, simmer until thickened. If it's too thick, add water or stock to thin it out. Garnish with fresh herbs if desired.\n"
        + "Note: If using a standard blender to purée the soup: be sure not to fill the jar more than halfway; leave the hole in the lid open and cover loosely with a dishtowel to allow the heat to escape; and pour blended soup into a clean pot.\n"
        + "Freezer-Friendly Instructions: The soup can be frozen, without the cream, for up to 3 months. Defrost the soup in the refrigerator for 12 hours and then reheat it on the stovetop over medium heat until hot. Once heated through, add the cream and bring to a simmer before serving.";
        
    }
}
export default PotatoLeekSoup;