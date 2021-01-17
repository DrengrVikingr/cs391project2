import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'react-bootstrap';

class Category extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                    <Carousel>
                        <Carousel.Item>
                        <Link to={this.props.path1}>
                            <img
                                className = "d-block w-100"
                                src = {this.props.img1}
                                alt = {this.props.title1}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.author1}</h3>
                                <p>{this.props.desc1}</p>
                            </Carousel.Caption>
                        </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to={this.props.path2}>
                            <img
                                className = "d-block w-100"
                                src = {this.props.img2}
                                alt = {this.props.title2}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.author2}</h3>
                                <p>{this.props.desc2}</p>
                            </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                        <Carousel.Item>
                        <Link to={this.props.path3}>
                            <img
                                className = "d-block w-100"
                                src = {this.props.img3}
                                alt = {this.props.title3}
                            />
                            <Carousel.Caption>
                                <h3>{this.props.author3}</h3>
                                <p>{this.props.desc3}</p>
                            </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                </Row>
            </Container>
        );
  }
}

export default Category