import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';


class HomeRecipe extends Component {
   
    state = { 
        
     }
    render() { 
        return (
            <React.Fragment>
                <Image  src= {this.props.image} fluid />
                <h3>{this.props.author}</h3>
                <p>{this.props.recipe}</p>
            </React.Fragment>
          );
    }

    
}
 
export default HomeRecipe;

