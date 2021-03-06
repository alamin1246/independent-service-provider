import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/food3.jpg'
import banner2 from '../../../images/banner/food2.jpg'
import banner3 from '../../../images/banner/food1.jpeg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='bg-dark'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Good Quality Foods</h3>
                        <p className='text-info fs-1'>I provides Good Home Food Catering Service. This Food is Testy and also Quality Foods.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Good Quality Foods</h3>
                        <p className='text-info fs-1'>I provides Good Home Food Catering Service. This Food is Testy and also Quality Foods.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Good Quality Foods</h3>
                        <p className='text-info fs-1'>I provides Good Home Food Catering Service. This Food is Testy and also Quality Foods.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;