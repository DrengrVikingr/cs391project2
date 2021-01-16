import React, { Component } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import Recipe from '../Recipe';

class Profiterole extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Recipe name={this.getName("Profiterole")} author={this.getAuthor("Profiterole")} description={this.getDesc("Profiterole")} ingredients={this.getIngredients("Profiterole")} instructions={this.getInstructions("Profiterole")} />
                <Footer />
            </React.Fragment>
        );
    }

    getName(name) {
        return "Profiterole";
    }

    getAuthor(name) {
        return "Jeanine Donofrio";
    }

    getDesc(name) {
        return "I first learnt to make these when I was at cookery school before this blog began. It was something I had really wanted to learn to make for so long, but when looking at recipes online I would see ‘choux’ and ‘pastry’ and feel a bit disheartened and give up. After being taught it, I realise its easier than I thought. It just has a posh name\n"
        + "I would also say that these are a bit faffy, but 100% worth it if you want to wow your guests at the dinner table over the festive period with homemade profiteroles. Yes, shop bought ones such as the M&S ones are utterly delightful, but making anything yourself is always better. Usually cheaper too!I used a simple chocolate ganache style sauce for the topping because you want something sweet, chocolatey and ever so slightly gooey to stick all the profiteroles together in a pile.\n"
        + "The beautiful thing about profiteroles is you can afford to be messy. Just get a nice dish, plate, bowl, or anything and pile the profiteroles on. You don’t need to take ages presenting them because they always look glorious.\n"
        + "You could serve these in individual dishes, or one giant pile like I have, but they always look incredible. You need to have faith when making the choux pastry as it can look a little odd at some points when making it, but stick with it.\n"
        + "Make sure to pierce the bottom of each profiterole to let the steam out so they stay in their wonderful shape, and ENJOYYYY.";}

    getIngredients(name) {
        return "Choux Pastry\n"
        + "150 ml Water\n"
        + "65 g Plain Flour\n"
        + "50 g Unsalted Butter\n"
        + "2 Medium Eggs\n"
        + "Pinch of Sugar\n"
        + "Pinch of Salt\n"
        + "\n"
        + "Vanilla Mascarpone Cream\n"
        + "250 g Mascarpone\n"
        + "75 ml Double Cream\n"
        + "1 tsp Vanilla\n"
        + "2 tbsp Icing Sugar\n"
        + "\n"
        + "Chocolate Sauce\n"
        + "100 ml Double Cream\n"
        + "150 g Milk Chocolate";
    }

    getInstructions(name) {
        return "For the Choux Pastry\n"
        + "1.	Preheat your oven to 200C/180C Fan, and line a large tray with parchment paper.\n"
        + "2.	Bring the water, Sugar, Salt and Unsalted Butter to the boil in a pan over a medium heat.\n"
        + "3.	Remove from the heat as soon as it boils, and add in ALL of the flour in one go.\n"
        + "4.	Stir like crazy and beat for about 15 seconds or so till a smooth ball shape is formed and it's coming away from the edge of the pan. If it doesn't come away, cook the mixture on a low heat for a little longer and try again.\n"
        + "5.	Leave the mixture to cool for five minutes or so, off the heat.\n"
        + "6.	Beat your eggs, and then GRADUALLY beat it into the flour mixture. Beat fully and well each time you add in more egg until you reach a smooth, glossy and dropping consistency.\n"
        + "7.	If the mixture becomes really thin, you've added too much egg. If it curdles, you've added too much at one time, and if the mixture is too stiff, you've not added enough!\n"
        + "8.	Pipe little rounds onto the tray, and bake in the oven for 20 minutes roughly until crisp. I made 20 profiteroles with this batch.\n"
        + "9.	Once baked, remove from the oven and pierce the bottom of the profiterole immediately with a skewer and leave to rest with the hole facing upwards to let the steam escape and let the pastry cool.\n"
        + "\n"
        + "For the Vanilla Mascarpone\n"
        + "1.	Add the vanilla, mascarpone and Double Cream and stir with a spoon to combine.\n"
        + "2.	Add in the icing sugar and stir again! Whisk up until thick.\n"
        + "3.	Pour the mixture into a piping bag, snip off the end, and carefully fill the profiteroles with the cream through the steam hole until full.\n"
        + "\n"
        + "For the Chocolate Sauce\n"
        + "1.	Heat the cream in a pan over a low-medium heat.\n"
        + "2.	Add in the chopped chocolate and whisk till smooth.\n"
        + "3.	Leave to cool before using!\n"
        + "4.	Coat the profiteroles with the sauce and then decorate how you fancy. I made a giant pile and then drizzled over some extra chocolate!";}
}



export default Profiterole;