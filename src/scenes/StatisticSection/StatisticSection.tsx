// @flow
import * as React from 'react';
import styles from './StatisSection.module.scss'
import HeaderText from "../../components/HeaderText";
import GradientBox from "../../components/GradientBox/GradientBox";
import ChartInfo from "../../components/ChartInfo";
import SocialMediaCard from "./components/SocialMediaCard";

const StatisticSection = () => {
    return (
        <div className={styles.statisticSectionContainer}>
            <HeaderText text={'Статистика '}/>
            <div className={styles.statisticContentWrapper}>
                <SocialMediaCard/>
                <ChartInfo/>
            </div>
        </div>
    );
};

export default StatisticSection
