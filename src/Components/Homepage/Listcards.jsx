import React from 'react'
import { FaCloud } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css'


export default function Listcards() {
  return (
    <div className='outer-box'>
        <Container>
            <Row className='my-2'>
                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>CSS Templates</h3>
                                    <p>TemplateMo website is the best for you to explore and download free website templates.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>


                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>HTML5 Web Pages</h3>
                                    <p>Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className='my-5'>
                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>Responsive Design</h3>
                                    <p>All of our CSS templates are 100% free to use for commercial or business websites.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>


                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>Mobile & Tablet ready!</h3>
                                    <p>Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row className='my-5'>
                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>Fast Customer Support</h3>
                                    <p>Do not be hesitated to contact us if you have any question or concern about our templates.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>


                <Col md={6}>
                    <div className='inner-box'>
                        <Row className='py-3'>
                            <Col md = {3}>
                                <div className='list-icon'>
                                    <FaCloud />
                                </div>
                            </Col>
                            <Col md = {9}> 
                                <div className='list-content'>
                                    <h3>Fully Customizable</h3>
                                    <p>If you have any idea or suggestion about new templates, feel free to let us know.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>

        <div className='list-detail'>
            <Container>
                <Row>
                    <Col md = {6}>
                        <h4>Buisness Solution & Crypto Investments</h4>
                    </Col>

                    <Col md = {6}>
                        <div className='buttons'>
                            <Button variant="success" className='below-button1'>Discover More</Button>
                            <Button variant="danger" className='below-button2'>Contact Us</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}
