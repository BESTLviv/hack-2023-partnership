// @flow
import * as React from 'react';
import Carousel from '../../shared/components/Carousel';
import {IMG_8088, IMG_8091, IMG_8200, IMG_9447} from '../../assets';
import {ICard} from './types';
import styles from './CaroselSection.module.scss'
import AnimationWrapper from "../../Animations";
import {useTranslation} from "react-i18next";

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
const {t} = useTranslation()
    return (
        <AnimationWrapper id={'aboutUs'} duration={2} animationType={'slideUp'} className={styles.carouselSectionContainer}>

            <div className={styles.carouselItem}>
                <Carousel cards={cards}/>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.title}>{t('hackathon.title')}</p>
                <p className={styles.space}>{t('hackathon.description')}
                </p>
                <p>
                    {t('hackathon.second_description')}
                </p>
            </div>

        </AnimationWrapper>


    );
};
export default CarouselSection
