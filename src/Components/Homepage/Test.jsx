import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaQuoteLeft } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import photo from "../../Assets/testimonials-01.jpg"
import company from "../../Assets/client-01.png"

export default function Test() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='testimonial-page'>
        <div className='test-content my-5'>
            <h5>Testimonial</h5>
            <h1>What They Say</h1>
        </div>
        <div className='test-slider my-5'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className='test-slider-outer my-5'>
                        <Container>
                            <div className='test-slider-inner'>
                                <Row>
                                    <Col md= {8}>
                                        <div className='test-slider-content'>
                                            <div className='slider-icon'><FaQuoteLeft /></div>
                                            <p>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                                            <h4>David Eigenberg</h4>
                                            <h6>Crypto Manager</h6>
                                        </div>

                                    </Col>
                                    <Col md= {4}>
                                        <div className = "img-container">
                                            <img src={photo} alt='Id man' className='test-img'/>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='test-slider-outer my-5'>
                        <Container>
                            <div className='test-slider-inner'>
                                <Row>
                                    <Col md= {8}>
                                        <div className='test-slider-content'>
                                            <div className='slider-icon'><FaQuoteLeft /></div>
                                            <p>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                                            <h4>David Eigenberg</h4>
                                            <h6>CEO of Mexant</h6>
                                        </div>

                                    </Col>
                                    <Col md= {4}>
                                        <img src={photo} alt='Id man' className='test-img'/>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='test-slider-outer my-5'>
                        <Container>
                            <div className='test-slider-inner'>
                                <Row>
                                    <Col md= {8}>
                                        <div className='test-slider-content'>
                                            <div className='slider-icon'><FaQuoteLeft /></div>
                                            <p>“Donec et nunc massa. Nullam non felis dignissim, dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                                            <h4>David Eigenberg</h4>
                                            <h6>CTO of Mexant</h6>
                                        </div>

                                    </Col>
                                    <Col md= {4}>
                                        <img src={photo} alt='Id man' className='test-img'/>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

        <div className='company-id py-5'>
            <Container>
                <Row>
                    <Col md = {2}> <img src={company} alt='Id man' className='test-img'/> </Col>
                    <Col md = {2}> <img src={company} alt='Id man' className='test-img'/> </Col>
                    <Col md = {2}> <img src={company} alt='Id man' className='test-img'/> </Col>
                    <Col md = {2}> <img src={company} alt='Id man' className='test-img'/> </Col>
                    <Col md = {2}> <img src={company} alt='Id man' className='test-img'/> </Col> 
                </Row>
            </Container>
        </div>
    </div>
  )
}
