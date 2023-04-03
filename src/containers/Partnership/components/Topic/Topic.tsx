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
                            Це один з найцікавіших форматів проведення змагань, оскільки за короткий час команди повинні створити свій проект та вміти вдало його презентувати. Хороша можливість для студентів покращити навички роботи в команді, познайомитись з однодумцями і поспілкуватись з представниками компаній.
                            Учасники отримають безцінний досвід і зможуть втілити свої найшаленіші ідеї у життя!
                        </p>

                    </div>

                </div>
            </div>
        </AnimationWrapper>


    );
};

export default Topic
