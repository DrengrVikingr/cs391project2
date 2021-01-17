import React, { Component } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Carousel from 'react-bootstrap/Carousel'
import Category from './components/Category';
import Babka from './assets/babka.jpg';
import Brownie from './assets/brownie.jpg';
import Profiterol from './assets/profiterol.jpg';
import { Link } from 'react-router-dom'
import './index.css'
import MongolianBeef from './components/recipe_info/MongolianBeef';
import Lasagna from './components/recipe_info/Lasagna';
import Falafel from './components/recipe_info/Falafel';
import CeasarSalad from './components/recipe_info/CeasarSalad';

class CategoriesPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Desserts</h1>
                <Category
                /*Desserts*/
                path1="/recipe_page/Babka" img1={Babka} title1="Babka" author1={this.getAuthor("Babka")} desc1={this.getDesc("Babka")}
                path2="/recipe_page/Brownie" img2={Brownie} title2="Brownie" author2={this.getAuthor("Brownie")} desc2={this.getDesc("Brownie")}
                path3="/recipe_page/Profiterol" img3={Profiterol} title3="Profiterol" author3={this.getAuthor("Profiterol")} desc3={this.getDesc("Profiterol")}
                />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Main Dishes</h1>
                <Category
                /*Main Dishes*/
                path1="/recipe_page/Mongolian" img1={MongolianBeef} title4="Mongolian" author1={this.getAuthor("Mongolian")} desc1={this.getDesc("Mongolian")}
                path2="/recipe_page/Lasagna" img2={Lasagna} title2="Lasagna" author2={this.getAuthor("Lasagna")} desc2={this.getDesc("Lasagna")}
                path3="/recipe_page/Profiterol" img3={Profiterol} title3="Profiterol" author3={this.getAuthor("Profiterol")} desc3={this.getDesc("Profiterol")}
                />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Starters</h1>
                <Category
                /*Starters*/
                path1="/recipe_page/Falafel" img1={Falafel} title1="Falafel" author1={this.getAuthor("Falafel")} desc1={this.getDesc("Falafel")}
                path2="/recipe_page/CeaserSalad" img2={CeasarSalad} title2="Ceasar Salad" author2={this.getAuthor("CeasarSalad")} desc2={this.getDesc("CeasarSalad")}
                path3="/recipe_page/Profiterol" img3={Profiterol} title3="Profiterol" author3={this.getAuthor("Profiterol")} desc3={this.getDesc("Profiterol")}
                />
                <Footer />
            </React.Fragment>
        );
    }

    getAuthor(recipe) {
        if (recipe === "Babka") return "Cenk Sönmezsoy";
        else if (recipe === "Profiterol") return "Jean Dunn";
        else if (recipe === "Brownie") return "Jeanine Donofrio";
        else if (recipe === "Mongolian") return "Sabrina Snyder";
        else if (recipe === "Lasagna") return "Reachel Farnsworth";
        else if (recipe === "Falafel") return "Lisa Bryan";
        else if (recipe === "CeaserSalad") return "Natasha Kravchuk";
        else return "";
    }

    getDesc(recipe) {
        if (recipe === "Babka") return "Baking a chocolate babka is no casual undertaking. The Eastern European yeast-risen coffee cake has 14 steps and takes all day to make. But the results are worth every sugarcoated second – with a moist, deeply flavored brioche-like cake wrapped around a dark fudge filling, then topped with cocoa streusel crumbs.";
        else if (recipe === "Profiterol") return "Choux pastry dough is piped through a pastry bag or dropped with a pair of spoons into small balls and baked to form largely hollow puffs .After cooling, the baked profiteroles are injected with filling using a pastry bag and narrow piping tip,or by slicing off the top, filling them, and reassembling. For sweet profiteroles, additional glazes or decorations may then be added.";
        else if (recipe === "Brownie") return "According to legend, the brownie was invented by one Brownie Schrumph when she tried to make a chocolate cake without baking powder or baking soda. Instead of rising, the brownie collapses into a dense texture. Brownies evolved to use less and less liquid until most recipes only call for eggs and melted butter and no additional liquid. They also have less and less flour to get that more dense texture instead of the more cake-like texture of the original brownie. Brown sugar also gives them that shiny top crust.";
        else if (recipe === "Mongolian") return "Mongolian Beef is a recipe that I’ve been cooking for clients for many years for a number of reasons. One, people love anything that tastes like Chinese takeout.";
        else if (recipe === "Lasagna") return "There are three kinds of cheese in this recipe. First you have the classic lasagna filling of ricotta cheese. Use whole milk ricotta cheese in this recipe for best results. The second cheese is sliced mozzarella. We like to get our mozzarella sliced at the deli counter in our grocery store. You want the slices to be pretty thin. 24 slices is the ideal amount and it should equal somewhere around one pound. Third, you’ll need freshly grated Parmesan cheese. Don’t use shredded, you’ll want grated for best results. Also, don’t use that canned stuff. It doesn’t melt the same as real, freshly grated Parmesan cheese.";
        else if (recipe === "Falafel") return "Falafel are delicious balls of chickpea and herb goodness that you find in Middle Eastern cooking. Naturally vegan and vegetarian, falafel are great in wraps, pitas, sandwiches and salads. Today, I’ll share how to make both fried falafel and baked falafel. You choose your favorite!";
        else if (recipe === "CeaserSalad") return "My son, David, is to thank for this recipe. He is 9 years old and took kids cooking classes at Sur La Table where he learned and fell in love with this caesar salad recipe, so we re-created it at home together. Caesar salad is easy, classic and the ingredients are simple.";
        else return "";
    }
}

export default CategoriesPage;