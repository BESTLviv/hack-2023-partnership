import styles from './Feedback.module.scss';
import HeaderText from '../HeaderText';
import AnimationWrapper from "../../Animations";

const Feedback = () => {

    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'slideUp'}>


            <div className={styles.feedbackContainer}>
                <HeaderText text={'Відгуки партнерів'}/>
                <div className={styles.feedback_flex_wrapper}>

                    <div
                        className={styles.feedback_container}
                    >
                        <div className={styles.company_feedback}>
                            <h3 className={styles.feedback_title}>Tsukat</h3>
                            <p>
                                На заході був проведений ефективний нетворкінг, який дав перші результати майже одразу,
                                організатори швидко реагували на зміни та оформили чудовий звіт. Загалом залишились
                                позитивні враження.

                            </p>
                        </div>

                        <div className={styles.others_flex}>

                            <div className={styles.company_feedback}>
                                <h3 className={styles.feedback_title}>OSF DIGITAl</h3>

                                <p>
                                    Хороший івент, для нас це був цікавий досвід.
                                </p>
                            </div>

                            <div className={styles.company_feedback}>
                                <h3 className={styles.feedback_title}>Keepit</h3>

                                <p>
                                    Подія нам дуже сподобалась і надихнула.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>

    );
};

export default Feedback;
