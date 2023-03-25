import { Grid, Flex } from '@chakra-ui/react';
import CustomForm from './CustomForm';
import styles from './Cart.module.scss';

const Left = () => {
  return (
      <Flex direction={'column'} h={'100%'} justifyContent={'space-between'}>
        <div>
          <div className={styles.help_item}>Базовий пакет</div>
          <div className={styles.help_item}>Get to know</div>
          {/* <div className={styles.help_item}>Get to know</div> */}
        </div>
          
        <div>
          <hr className={styles.hr} />
          <p className={styles.total_price}>475$</p>
        </div>
      </Flex>
  );
};

const Right = () => {
  return <CustomForm />;
};

const Cart = () => {
  return (
    <div>
      <h1 className={styles.title}>Кошик</h1>
      <Grid
        className={styles.cart_block}
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
        }}
        gap={6}
      >
        <Left />
        <Right />
      </Grid>
    </div>
  );
};

export default Cart;
