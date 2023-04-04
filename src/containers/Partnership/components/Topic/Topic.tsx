// @flow
import * as React from 'react';
import HeaderText from "../../../../components/HeaderText";
import AnimationWrapper from "../../../../Animations";
import styles from './Topic.module.scss';

export const Topic = () => {
    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>


            <HeaderText text={"тема:"} />
            <div style={{ height: '50px' }} />
            <HeaderText text={"волонтерство"} />
            <div className={styles.additionalInfoContainer}>

                <div className={styles.additionalInfo_flex_wrapper}>

                    <div className={styles.additionalInfo_container}>

                        <p>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Цьогорічна тема програмного марафону, "волонтерство", надає студентам унікальну можливість взяти участь в актуальному суспільному процесі. Учасники зосередяться на розробці креативних та інноваційних рішень, які сприятимуть підвищенню ефективності та популярності волонтерської діяльності в Україні.

                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Волонтерство відіграє ключову роль у допомозі людям та спільнотам, беручи участь у різноманітних сферах: від благодійності до екології. Однак, волонтерська діяльність стикається з рядом викликів, які потребують розв'язання.
                        </p>

                    </div>

                </div>
            </div>
        </AnimationWrapper>


    );
};

export default Topic
