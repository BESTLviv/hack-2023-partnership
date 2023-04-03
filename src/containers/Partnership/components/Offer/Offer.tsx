import Package from './components/Package';
import HeaderText from '../../../../components/HeaderText';
import styles from './Offer.module.scss';
import AnimationWrapper from "../../../../Animations";
import {useAppDispatch, useAppSelector} from "../../../../redux/store";
import {IOffer, ordersId, selectOrder} from "../../../../redux/slices/orderSlice/orderSlice";

const Offer = () => {
    const offerObj: IOffer = {
        title: 'Базовий пакет',
        id: 'Базовий пакет',
        price: 300,
        list: [
            'Логотип компанії на бренд-волі та на сайті проєкту',
            'Промоція в соціальних мережах',
            'Фото та відео звіт',
            'Логотип та згадка про компанію у пост відео',
            'Транслювання відео компанії під час Хакатону',
            'Участь у нетворкінгу',
            'Участь в благодійному зборі-розіграші для ЗСУ (За вашим бажанням)',
        ],
    };

    const optionalPackages = [
        {
            title: 'Recruiter',
            id: 'Recruiter',
            price: 200,
            list: ['Розсилка вакансій у Telegram боті', 'Доступ до бази CV учасників'],
        } as IOffer,
        {
            title: 'Initiator',
            id: 'Initiator',
            price: 700,
            list: [
                'Надання ментора та судді',
                'Проведення воркшопу або тренінгу (25-45 хв)',
                'Лого на футболках',
                'Номінація від компанії',
                'Пост про компанію в Instagram',
            ],
        } as IOffer,
        {
            title: 'Get to know',
            id: 'Get to know',
            price: 200,
            list: ['World cafe', 'Інтерактивні Insta-stories', 'Творчість без меж'],
        } as IOffer,
    ];

    const dispatch = useAppDispatch();
    const selectedOrders = useAppSelector((state) => state.order.selectedOrders);

    const handleSelectChange = (orderObj: IOffer) => {
        dispatch(selectOrder(orderObj));
    };

    const isOfferSelected = (offer: IOffer) => {
        return !!selectedOrders.find((order) => order.id === offer.id);
    };
    return (


        <AnimationWrapper id={'orders'} animationType={'fadeIn'} duration={1} delay={0.5}
                          className={styles.offer_wrapper}>
            <HeaderText text="Пропозиція"/>
            <div className={styles.offer_empty_space}/>
            <Package isSelected={isOfferSelected(offerObj)}
                     onClick={() => handleSelectChange(offerObj)} title={offerObj.title}
                     list={offerObj.list}
                     price={offerObj.price} isMain/>

            <p className={styles.offer_text_mobile}>
                Партнерам попередніх хакатонів -5%
                <br/>
                Базовий + 2 опції - 50$
                <br/>
                Базовий + 3 опції -100$
                <br/>
            </p>
            <div className={styles.offer_options_wrapper}>
                {optionalPackages.map((packageItem, index) => (
                    <Package
                        isSelected={isOfferSelected(packageItem)}
                        onClick={() => handleSelectChange(packageItem)}
                        key={index}
                        title={packageItem.title}
                        list={packageItem.list}
                        price={packageItem.price}
                    />
                ))}
            </div>
        </AnimationWrapper>

    );
};

export default Offer;
