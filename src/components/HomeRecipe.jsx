import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';

class HomeRecipe extends Component {

    state = {

    }
    render() {
        return (
            <React.Fragment>
                <Media as="li" className="m-5">
                    <img
                        width={424}
                        height={254}
                        className="mr-5 img-rounded"
                        src={this.props.image}
                        alt="image"
                    />
                    <Media.Body>
                        <h5 className="text-warning" > <Link to={'/recipe_page/' + this.props.name}  >  {this.props.name} </Link> </h5>
                        <p >
                            {this.props.recipe}
                        </p>
                        <p className="text-warning"> - {this.props.author} </p>
                    </Media.Body>
                </Media>
            </React.Fragment>
        );

    }





}

export default HomeRecipe;

