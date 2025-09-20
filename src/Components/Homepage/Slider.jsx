import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../Assets/slide-01.jpg';
import slider2 from '../../Assets/slide-02.jpg';
import slider3 from '../../Assets/slide-03.jpg';
import Button from 'react-bootstrap/Button';

export default function Slider() {
  return (
    <div className='slider'>
        <Carousel>
            <Carousel.Item>
                <img src= {slider1} alt='Slider 1' />
                <Carousel.Caption>
                <h3>Get <span>Ready</span> for your <br></br> buisness &<br></br>Upgrade <span>all Aspects</span> </h3>
                <div className='line'></div>
                <p>Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.</p>
                <Button variant="warning" className='slider-button'>Discover More</Button>
                <Button variant="danger" className='slider-button'>Contact Us</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src= {slider2} alt='Slider 2'></img>
                <Carousel.Caption>
                <h3> <span>Digital</span> currency for you & Best <br></br> <span>Crypto</span> Tips</h3>
                <div className='line'></div>
                <p>You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free. It does not ask you anything in return. You have a total freedom to use any template for any purpose.</p>
                <Button variant="warning" className='slider-button'>Discover More</Button>
                <Button variant="danger" className='slider-button'>Contact Us</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src= {slider3} alt='Slider 3'></img>
                <Carousel.Caption>
                <h3>Best One in Town <br></br> & Crypto <span>Service</span></h3>
                <div className='line'></div>
                <p>
                    Mexant HTML5 Template is provided for free of charge. This layout is based on Boostrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.
                </p>
                <Button variant="warning" className='slider-button'>Discover More</Button>
                <Button variant="danger" className='slider-button'>Contact Us</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

