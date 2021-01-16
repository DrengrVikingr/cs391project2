import React, { Component} from 'react';
import { Container, Carousel, Image } from 'react-bootstrap';


class CategoriesPage extends Component {

    state = {  }
    render() { 
        return (

          <React.Fragment>
             <h4>Starters</h4>
              <Carousel slide="false">
                <Carousel.Item>
                  <img
                    width={424}
                    height={254}
                    className="mr-5 img-rounded"
                    src={this.props.image}
                    alt="image"
                  />
                <Carousel.Caption>
                  <h3 className="text-warning">  {this.props.author}</h3>
                  <p>{this.props.recipe}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </React.Fragment>
            
        );
    }
}

export default CategoriesPage;