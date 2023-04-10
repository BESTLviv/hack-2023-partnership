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
      text: 'Розміщення інформації про компанію в соціальних мережах:\n1 згадка в Instagram story',
    },
    {
      title: 'Розміщення логотипу компанії на бренд-волi та на сайті проєкту',
      text: 'Розміщення логотипа партнера на бренд-волі проєкту, а також на сайті Хакатону',
    },
    {
      title: 'Поширення промо-продукції',
      text: 'Розповсюдження рекламних матеріалів партнера серед учасників та організаторів хакатону.',
    },
    {
      title: 'Логотип та згадка про компанію у постпроєктному відео',
      text: 'Додавання логотипа компанії на відео, яке буде створено та виставлено в інстаграмі після успішного завершення Хакатону. Вказівка на компанію та її внесок у захід також буде присутня в цьому відео.',
    },
    {
      title: 'Транслювання відео компанії під час Хакатону',
      text: 'Під час проведення Хакатону, в залах будуть стояти проєктори, де Ваша компанія зможе показувати промо ролик або іншу інформацію про себе',
    },
    {
      title: 'Розміщення банера на місці події',
      text: 'Під час проведення хакатону в залах будуть розміщені банери вашої компанії',
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
