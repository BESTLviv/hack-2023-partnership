// @flow
import * as React from 'react';
import styles from './StatisSection.module.scss';
import HeaderText from '../../components/HeaderText';
import ChartInfo from '../../components/ChartInfo';
import SocialMediaCard from './components/SocialMediaCard';
import AnimationWrapper from '../../Animations';
import { useTranslation } from 'react-i18next';

const StatisticSection = () => {
    const { t } = useTranslation();

    return (
        <AnimationWrapper
            duration={1}
            animationType={'fadeIn'}
            className={styles.statisticSectionContainer}
        >
            <HeaderText text={t('statistics.topic')} />
            <div className={styles.statisticContentWrapper}>
                <SocialMediaCard />
                <ChartInfo />
            </div>
        </AnimationWrapper>
    );
};

export default StatisticSection;
