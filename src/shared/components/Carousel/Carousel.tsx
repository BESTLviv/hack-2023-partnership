import React, {FC} from 'react';
import {
    Image,
} from '@chakra-ui/react';
import styles from './Carousel.module.css'
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import {ICard} from "../../../scenes/CarouselSection/types";

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

interface ICarouselProps {
    cards: ICard[]
}

const Carousel: FC<ICarouselProps> = ({cards}) => {
    return (
        <div
            className={styles.carouselContainer}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <Slider {...settings} >
                {cards?.map((card) => (
                    <Image boxSize='full'
                           objectFit='cover' src={card.image}/>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel
