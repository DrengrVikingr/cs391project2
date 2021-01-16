import React, { Component } from 'react';
import HomeRecipe from './HomeRecipe';
import Babka from '../assets/babka.jpg';
import Brownie from '../assets/brownie.jpg';
import Profiterol from '../assets/profiterol.jpg';
import { Container, Row } from 'react-bootstrap';
import Link from 'react-router-dom';

class HomeRecipes extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <ul className="list-unstyled" >
                        <HomeRecipe name="Babka" image={Babka} author={this.getAuthor("Babka")} recipe={this.getRecipe("Babka")} />
                        <HomeRecipe name="Brownie" image={Brownie} author={this.getAuthor("Brownie")} recipe={this.getRecipe("Brownie")} />
                        <HomeRecipe name="Profiterol" image={Profiterol} author={this.getAuthor("Profiterol")} recipe={this.getRecipe("Profiterol")} />
                    </ul>
                </Container>
            </React.Fragment>

        );
    }

    getAuthor(name) {
        if (name === "Babka") return "Cenk Sönmezsoy";
        else if (name === "Profiterol") return "Jean Dunn";
        else if (name === "Brownie") return "Jeanine Donofrio";
        else return "";
    }

    getRecipe(name) {
        if (name === "Babka") return "Baking a chocolate babka is no casual undertaking. The Eastern European yeast-risen coffee cake has 14 steps and takes all day to make. But the results are worth every sugarcoated second – with a moist, deeply flavored brioche-like cake wrapped around a dark fudge filling, then topped with cocoa streusel crumbs.";
        else if (name === "Profiterol") return "Choux pastry dough is piped through a pastry bag or dropped with a pair of spoons into small balls and baked to form largely hollow puffs .After cooling, the baked profiteroles are injected with filling using a pastry bag and narrow piping tip,or by slicing off the top, filling them, and reassembling. For sweet profiteroles, additional glazes or decorations may then be added.";
        else if (name === "Brownie") return "According to legend, the brownie was invented by one Brownie Schrumph when she tried to make a chocolate cake without baking powder or baking soda. Instead of rising, the brownie collapses into a dense texture. Brownies evolved to use less and less liquid until most recipes only call for eggs and melted butter and no additional liquid. They also have less and less flour to get that more dense texture instead of the more cake-like texture of the original brownie. Brown sugar also gives them that shiny top crust.";
        else return "";
    }
}

export default HomeRecipes;