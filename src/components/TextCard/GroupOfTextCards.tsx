import { Grid, Box, GridItem } from '@chakra-ui/react';
import TextCard from './TextCard';
import styles from './TextCard.module.scss';

const GroupOfTextCards = () => {
  return (
    <Box
      maxWidth={{
        base: '100%',
        sm: '540px',
        md: '720px',
        lg: '720px',
        xl: '960px  ',
      }}
      width="100%"
      marginX="auto"
      paddingX={{ base: '4', sm: '6' }}
    >
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
        gap="0px"
        rowGap="36px"
      >
        <TextCard text={'Підвищення впізнаваності бренду'} />
        <TextCard text={'Ефективний піар, спрямований на цільову аудиторію'} />
        <TextCard text={'Шанс знайти та підтримати цікаві ідеї в темі ‘Волонтерство’'} />
        <TextCard text={'Покращення іміджу серед студентів'} />
        <GridItem colSpan={2} justifySelf="center">
            <TextCard text={'Інвестиція в амбітну та талановиту молодь'} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default GroupOfTextCards;
