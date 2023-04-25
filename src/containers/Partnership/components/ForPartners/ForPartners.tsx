import React, { ReactNode } from 'react';
import styles from './ForPartners.module.scss';
import { Grid, Box } from '@chakra-ui/react';
import HeaderText from '../../../../components/HeaderText';
import AnimationWrapper from '../../../../Animations';
import { setAudiencePopup } from '../../../../redux/slices/orderSlice/orderSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

interface MyContainerProps {
  children: ReactNode;
}

const MyContainer = ({ children }: MyContainerProps) => {
  return (
    <Box
      maxWidth={{
        base: '100%',
        sm: '400px',
        md: '600px',
        lg: '720px',
        xl: '920px',
      }}
      width="100%"
      marginX="auto"
      marginTop={'40px'}
    >
      {children}
    </Box>
  );
};

interface Props {
  text: string;
  onClick?: () => void;
  highlightedText?: string;
}

const AdvCard = ({ text, onClick, highlightedText }: Props) => {
  return (
    <Box className={styles.abv_card} width="100%">
      <span>
        {text}
        {highlightedText ? (
          <span className={styles.highlightedText} onClick={onClick}>
            {highlightedText}
          </span>
        ) : null}
      </span>
    </Box>
  );
};

const ForPartners = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const openAudiencePopup = () => {
    document.body.style.overflow = 'hidden';
    dispatch(setAudiencePopup(true));
  };

  const cards = [
    t('hackathon.benefits.brand_recognition'),
    t('hackathon.benefits.effective_pr'),
    t('hackathon.benefits.opportunity_to_sup'),
    t('hackathon.benefits.improved_image'),
  ];

  return (
    <AnimationWrapper delay={0.5} duration={1} animationType={'zoomIn'}>
      <Box mb={'40px'}>
        <HeaderText text={t('hackathon.benefits_topic')} />
        <MyContainer>
          <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={8}
            alignItems="stretch"
          >
            {cards.map((text, index) => (
              <AdvCard
                key={index}
                text={text}
                onClick={index === 1 ? openAudiencePopup : undefined}
                highlightedText={index === 1 ? t('hackathon.CA').toString() : undefined}
              />
            ))}
          </Grid>
          <Grid
            justifyContent="center"
            margin={0}
            padding={0}
            w={'100%'}
            className={styles.lastGridEl}
          >
            <Box className={styles.abv_card} mx={'auto'} mt="8">
              {t('hackathon.benefits.investment_in_people')}
            </Box>
          </Grid>
        </MyContainer>
      </Box>
    </AnimationWrapper>
  );
};

export default ForPartners;
