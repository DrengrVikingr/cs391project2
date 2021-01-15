import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';

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
                        <h5 className="text-warning">  {this.props.author}</h5>
                        <p>
                            {this.props.recipe}
                        </p>
                    </Media.Body>
                </Media>
            </React.Fragment>
        );
    }


}

export default HomeRecipe;

