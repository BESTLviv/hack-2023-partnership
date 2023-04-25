import styles from './Feedback.module.scss';
import HeaderText from '../HeaderText';
import AnimationWrapper from '../../Animations';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
    const { t } = useTranslation();
    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'slideUp'}>
            <div className={styles.feedbackContainer}>
                <HeaderText text={t('partner_reviews.topic')} />
                <div className={styles.feedback_flex_wrapper}>
                    <div className={styles.feedback_container}>
                        <div className={styles.company_feedback}>
                            <h3 className={styles.feedback_title}>Tsukat</h3>
                            <p>{t('partner_reviews.reviews.tsukat_review')}</p>
                        </div>

                        <div className={styles.others_flex}>
                            <div className={styles.company_feedback}>
                                <h3 className={styles.feedback_title}>OSF DIGITAl</h3>
                                <p>{t('partner_reviews.reviews.osf_review')}</p>
                            </div>

                            <div className={styles.company_feedback}>
                                <h3 className={styles.feedback_title}>Keepit</h3>
                                <p>{t('partner_reviews.reviews.keepit_review')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default Feedback;
