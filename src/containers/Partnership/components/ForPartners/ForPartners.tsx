import React, { ReactNode } from 'react';
import styles from './ForPartners.module.scss';
import { Grid, Box } from '@chakra-ui/react';
import HeaderText from '../../../../components/HeaderText';

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
}

const AdvCard = ({ text }: Props) => {
  return (
    <Box className={styles.abv_card} width="100%">
      {text}
    </Box>
  );
};

const ForPartners = () => {
  const cards = [
    'Підвищення впізнаваності бренду',
    'Ефективний піар, спрямований на цільову аудиторію',
    'Шанс знайти та підтримати цікаві ідеї в темі "Волонтерство"',
    'Покращення іміджу серед студентів',
  ];

  return (
    <Box mb={'40px'}>
      <HeaderText text='Для партнерів це:'/>
      <MyContainer>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8} alignItems="stretch">
          {cards.map((text, index) => (
            <AdvCard key={index} text={text} />
          ))}
        </Grid>
        <Grid justifyContent="center" margin={0} padding={0} w={'100%'} className={styles.lastGridEl}>
          <Box className={styles.abv_card} mx={'auto'} mt="8">
            Інвестиція в амбітну та талановиту молодь
          </Box>
        </Grid>
      </MyContainer>
    </Box>
  );
};

export default ForPartners;