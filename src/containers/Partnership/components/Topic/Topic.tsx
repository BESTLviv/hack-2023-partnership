// @flow
import * as React from 'react';
import HeaderText from '../../../../components/HeaderText';
import AnimationWrapper from '../../../../Animations';
import styles from './Topic.module.scss';
import { useTranslation } from 'react-i18next';

export const Topic = () => {
  const { t } = useTranslation();
  return (
    <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>
      <HeaderText text={t('topic')} />
      <div style={{ height: '50px' }} />
      <HeaderText text={t('hackathon.theme')} />
      <div className={styles.additionalInfoContainer}>
        <div className={styles.additionalInfo_flex_wrapper}>
          <div className={styles.additionalInfo_container}>
            <p>{t('hackathon.volonteer_descreption')}</p>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Topic;
