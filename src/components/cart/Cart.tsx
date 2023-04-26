import { Grid, Flex } from '@chakra-ui/react';
import CustomForm from './CustomForm';
import styles from './Cart.module.scss';
import HeaderText from '../HeaderText';
import AnimationWrapper from "../../Animations";
import { useAppSelector } from "../../redux/store";
import { selectedForm } from "../../redux/slices/formSlice/formSlice";
import { getTotalPrice } from "../../redux/slices/formSlice/utils/getTotalPrice";
import { useTranslation } from 'react-i18next';

const Left = () => {
    const selectedOrders = useAppSelector((state) => state.order.selectedOrders);
    const sum = getTotalPrice()

    return (
        <Flex direction={'column'} h={'100%'} justifyContent={'space-between'}>
            <div>
                {
                    selectedOrders.map(order => (
                        <div key={order.id} className={styles.help_item}>{order.title}</div>

                    ))
                }
            </div>

            <div>
                <hr className={styles.hr} />
                <p className={styles.total_price}>{sum}$</p>
            </div>
        </Flex>
    );
};

const Right = () => {
    return <CustomForm />;
};

const Cart = () => {
    const { t } = useTranslation();

    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'slideUp'}>

            <HeaderText text={t('cart.topic')} />
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
        </AnimationWrapper>

    );
};

export default Cart;
