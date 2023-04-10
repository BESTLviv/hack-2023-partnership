import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import styles from './OfferPopup.module.scss';
import ArrowIcon from '../../../../assets/icons/arrow.svg';

import { ordersId, setPopupTitle } from '../../../../redux/slices/orderSlice/orderSlice';

type OffersType = {
  [key in ordersId]: {
    title: string;
    text: string;
  }[];
};

const OFFERS: OffersType = {
  'Пропозиція': [
    {
      title: 'Промоція в соціальних мережах',
      text: 'Промоція в соціальних мережах (інформація про компанію) - Розміщення інформації про компанію в соціальних мережах:\n1 згадка в Instagram story',
    },
    {
      title: 'Розміщення логотипу компанії на бренд-волі та на сайті проєкту',
      text: 'Логотип компанії на бренд-волі та на сайті проєкту - Розміщення логотипа партнера на бренд-волі проєкту, а також на сайті Хакатону',
    },
    {
      title: 'Поширення промо-продукції',
      text: 'Поширення промо-продукції - Розповсюдження рекламних матеріалів партнера серед учасників та організаторів хакатону.',
    },
    {
      title: 'Логотип та згадка про компанію у постпроєктному відео',
      text: 'Логотип та згадка про компанію у постпроєктному відео —  Додавання логотипа компанії на відео, яке буде створено та виставлено в інстаграмі після успішного завершення Хакатону. Вказівка на компанію та її внесок у захід також буде присутня в цьому відео.',
    },
    {
      title: 'Транслювання відео компанії під час Хакатону',
      text: 'Транслювання відео компанії під час Хакатону - під час проведення Хакатону, в залах будуть стояти проєктори, де Ваша компанія зможе показувати промо ролик або іншу інформацію про себе',
    },
    {
      title: 'Розміщення банера на місці події',
      text: 'Розміщення банера на місці події - під час проведення хакатону в залах будуть розміщені банери вашої компанії',
    },
    {
      title: 'Поширення інформації про вакансії внутрішніми каналами BEST Lviv',
      text: 'Поширення інформації про вакансії внутрішніми каналами BEST Lviv - Поширення інформації про вакансії в Вашій компанії, через telegram бота, пошту і тд',
    }
  ]
};

const OfferPopup = () => {
  const offerTitle = useSelector((state: RootState) => state.order.popupTitle);
  const dispatch = useDispatch();

  if (!offerTitle) return null;

  const offer = useMemo(() => {
    return OFFERS[offerTitle].reduce((acc, item) => {
      acc.push(item.title);
      acc.push(item.text);
      return acc;
    }, [] as string[]);
  }, [offerTitle]);

  const closePopup = () => {
    document.body.style.overflow = '';
    dispatch(setPopupTitle(null));
  };

  return (
    <div className={styles.popupWrapper} onClick={closePopup}>
      <div className={styles.popupContent}>
        <div onClick={closePopup} className={styles.closeBtnWrapper}>
          <img src={ArrowIcon} className={styles.arrowIcon} />
        </div>
        <div className={styles.offerTitle}>{offerTitle}</div>
        <div className={styles.desktopWrapper}>
          {offer.map((content, index) => {
            return index % 2 === 0 ? (
              <div className={styles.boxTitle} key={index}>
                {content}
              </div>
            ) : (
              <div className={styles.boxText} key={index}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
