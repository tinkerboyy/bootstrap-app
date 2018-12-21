import React, { Component } from 'react';
import { Container, Row, Col, Button, Carousel, Image } from 'react-bootstrap';

import './App.scss';
import Header from './components/header/Header';
import Details from './components/details/Details';
import BannerDescription from './components/banner-description/BannerDescription';
import BannerImage from './components/banner-image/Banner-image';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <Carousel className="space-bottom">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="First slide"
                style={{ height: '32rem' }}
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                style={{ height: '32rem' }}
                className="d-block w-100"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                alt="Third slide"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
                style={{ height: '32rem' }}
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Container>
            <Row>
              <Details />
              <Details />
              <Details />
            </Row>
            <hr className="featurette-divider" />

            <Row>
              <Col md={7}>
                <BannerDescription />
              </Col>
              <Col md={5}>
                <BannerImage />
              </Col>
            </Row>

            <hr className="featurette-divider" />

            <Row>
              <Col md={7} md={{ order: 2 }}>
                <BannerDescription />
              </Col>
              <Col md={5} md={{ order: 1 }}>
                <BannerImage />
              </Col>
            </Row>

            <hr className="featurette-divider" />

            <Row>
              <Col md={7}>
                <BannerDescription />
              </Col>
              <Col md={5}>
                <BannerImage />
              </Col>
            </Row>
            <hr className="featurette-divider" />
          </Container>

          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
