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
      'Промоція в соціальних мережах ',
      'Розміщення логотипу компанії на брендволі',
      'Поширення промо-продукції',
      'Логотип та згадка про компанію у постпроєктному відео',
      'Транслювання відео компанії під час Хакатону',
      'Розміщення банера на місці події',
      'Логотип на сайті проєкту',
      'Поширення інформації про вакансії внутрішніми каналами BEST Lviv',
    ],
  };

  const dispatch = useAppDispatch();
  const selectedOrders = useAppSelector((state) => state.order.selectedOrders);

  const handleSelectChange = (orderObj: IOffer) => {
    dispatch(selectOrder(orderObj));
  };

  const isOfferSelected = (offer: IOffer) => {
    return !!selectedOrders.find((order) => order.id === offer.id);
  };
  return (
    <AnimationWrapper
      id={'orders'}
      animationType={'fadeIn'}
      duration={1}
      delay={0.5}
      className={styles.offer_wrapper}
    >
      <HeaderText text="Пропозиція" />
      <div className={styles.offer_empty_space} />
      <Package
        isSelected={isOfferSelected(offerObj)}
        onClick={() => handleSelectChange(offerObj)}
        title={offerObj.title}
        id={offerObj.id}
        list={offerObj.list}
        price={offerObj.price}
        isMain
      />
      <div className={styles.offer_empty_space} />
      <div className={styles.additionalInfoContainer}>
        <div>
          <div className={styles.feedback_container}>
            <div className={styles.additionalInfo_container}>
              <p>
                Після успішного завершення Хакатону Вам надається фото та
                відеозвіт від організаторів
              </p>
              <p>*Оплата буде здійснюватись за курсом НБУ </p>
            </div>
          </div>
        </div>
      </div>
    </AnimationWrapper>
  );
};

export default Offer;
