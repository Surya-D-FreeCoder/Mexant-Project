import React from 'react'
import { useState } from 'react';
import "./Home.css"
import lady from "../../Assets/calculator-image.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
    <div className='contact-form '>
        <Container>
            <Row>
                <Col md={6}>
                    <img src={lady} alt='ambassodor' className='contact-image'/>
                </Col>

                <Col md={6}>
                    <div className='contact-content '>
                        <h4>Your Freedom</h4>
                        <h2>Get a Finacial Plan</h2>
                    </div>
                    <div className='contact-form-part mx-4'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                    defaultValue="Surya"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Email"
                                    defaultValue="abcd@gmail.com"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" placeholder="City" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Subject.
                                </Form.Control.Feedback>
                                </Form.Group>
                                
                                <Form.Group as={Col} md="12" controlId="validationCustom05">
                                <Form.Label>Feedback</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Feedback" required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Feedback.
                                </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            
                            <Button type="submit">Submit form</Button>
                            </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
