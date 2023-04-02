// @flow
import * as React from 'react';
import Carousel from '../../shared/components/Carousel';
import {IMG_8088, IMG_8091, IMG_8200, IMG_9447} from '../../assets';
import {ICard} from './types';
import styles from './CaroselSection.module.scss'
import AnimationWrapper from "../../Animations";

const cards: ICard[] = [
    {
        image: IMG_8088
    },
    {
        image: IMG_8091
    },
    {
        image: IMG_8200
    },
    {
        image: IMG_9447
    },
];
const CarouselSection = () => {

    return (
        <AnimationWrapper duration={2} animationType={'slideUp'} className={styles.carouselSectionContainer}>

            <div className={styles.carouselItem}>
                <Carousel cards={cards}/>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.title}>BEST HACKATHON — </p>
                <p className={styles.space}>це захід, під час якого студенти IT-спеціальностей командно створюють
                    новий
                    програмний продукт за 24
                    години в форматі non-stop programming.
                </p>
                <p>Цьогорічна тема &quot;волонтерство&quot; дозволить студентам долучитися до важливого суспільного
                    процесу та
                    зосередитися на розробці креативних й інноваційних рішень. які допоможуть підвищити ефективність
                    та
                    популярність волонтерської діяльності в Україні.
                </p>
            </div>

        </AnimationWrapper>


    );
};
export default CarouselSection
