import Package from './components/Package';
import HeaderText from '../../../../components/HeaderText';
import styles from './Offer.module.scss';
import AnimationWrapper from '../../../../Animations';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { IOffer, selectOrder } from '../../../../redux/slices/orderSlice/orderSlice';

const Offer = () => {
    const offerObj: IOffer = {
        title: 'Базовий пакет',
        id: 'Базовий пакет',
        price: 300,
        list: [
            'Логотип компанії на бренд-волі та на сайті проєкту',
            'Промоція в соціальних мережах (інформація про компанію)',
            //  'Фото та відео звіт',
            'Логотип та згадка про компанію у постпроєктному відео',
            //   'Транслювання відео компанії під час Хакатону',
            'Участь у нетворкінгу',
            //   'Участь в благодійному зборі-розіграші для ЗСУ (За вашим бажанням)',
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
            list: ['World cafe', 'Інтерактивні Insta-stories', 'Завдання дня'],
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
            <HeaderText text="Пропозиція" />
            <div className={styles.offer_empty_space} />
            <Package isSelected={isOfferSelected(offerObj)}
                onClick={() => handleSelectChange(offerObj)} title={offerObj.title} id={offerObj.id}
                list={offerObj.list}
                price={offerObj.price} isMain />

            <div className={styles.offer_options_wrapper}>
                {optionalPackages.map((packageItem, index) => (
                    <Package
                        isSelected={isOfferSelected(packageItem)}
                        id={packageItem.id}
                        onClick={() => handleSelectChange(packageItem)}
                        key={index}
                        title={packageItem.title}
                        list={packageItem.list}
                        price={packageItem.price}
                    />
                ))}
            </div>
            <div className={styles.additionalInfoContainer}>

                <div>

                    <div className={styles.feedback_container}>

                        <div className={styles.additionalInfo_container}>

                            <p>
                                Кожен, хто стає партнером у нашому проєкті, має змогу долучитись до благодійного збору-розіграшу
                                для ЗСУ в наших соціальних мережах. Серед людей, які задонатять, випадковим чином оберуться переможці,
                                які отримають подарунки від компаній-партнерів. Також після успішного завершення Хакатону
                                Вам надається фото та відеозвіт від організаторів

                            </p>

                            <p>*Оплата буде здійснюватись за курсом НБУ </p>
                            <p>партнерам попередніх проєктів -5%</p>
                            <p>базовий + 2 опції  — 50$</p>
                            <p>базовий + 3 опції — 150$</p>

                        </div>


                    </div>
                </div>
            </div>
        </AnimationWrapper>

    );
};

export default Offer;
