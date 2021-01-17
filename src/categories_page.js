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

class CategoriesPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <h1 style={{textAlign: "center", marginTop: '2rem', marginBottom: '1rem', color: 'rgb(83, 88, 94)'}}>Desserts</h1>
                <Category
                path1="/recipe_page/Babka" img1={Babka} title1="Babka" author1={this.getAuthor("Babka")} desc1={this.getDesc("Babka")}
                path2="/recipe_page/Brownie" img2={Brownie} title2="Brownie" author2={this.getAuthor("Brownie")} desc2={this.getDesc("Brownie")}
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
        else return "";
    }

    getDesc(recipe) {
        if (recipe === "Babka") return "Baking a chocolate babka is no casual undertaking. The Eastern European yeast-risen coffee cake has 14 steps and takes all day to make. But the results are worth every sugarcoated second – with a moist, deeply flavored brioche-like cake wrapped around a dark fudge filling, then topped with cocoa streusel crumbs.";
        else if (recipe === "Profiterol") return "Choux pastry dough is piped through a pastry bag or dropped with a pair of spoons into small balls and baked to form largely hollow puffs .After cooling, the baked profiteroles are injected with filling using a pastry bag and narrow piping tip,or by slicing off the top, filling them, and reassembling. For sweet profiteroles, additional glazes or decorations may then be added.";
        else if (recipe === "Brownie") return "According to legend, the brownie was invented by one Brownie Schrumph when she tried to make a chocolate cake without baking powder or baking soda. Instead of rising, the brownie collapses into a dense texture. Brownies evolved to use less and less liquid until most recipes only call for eggs and melted butter and no additional liquid. They also have less and less flour to get that more dense texture instead of the more cake-like texture of the original brownie. Brown sugar also gives them that shiny top crust.";
        else return "";
    }
}

export default CategoriesPage;