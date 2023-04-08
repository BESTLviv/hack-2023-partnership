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
}

const OFFERS: OffersType = {
  'Базовий пакет': [
    {
      title: 'Промоція в соціальних мережах',
      text: 'Логотип компанії на бренд-волі та на сайті проєкту - Розміщення логотипа партнера на бренд-волі проєкту, а також на сайті Хакатону',
    },
    {
      title: 'Розміщення логотипу компанії на брендволі',
      text: 'Розміщення інформації про компанію в соціальних мережах: \n a. 1 згадка в Instagram story \n b. 1 пост в LinkedIn \nc. Пост дайджест у Telegram каналі',
    },
    {
      title: 'Поширення промо-продукції',
      text: 'Розміщення інформації про компанію в соціальних мережах: \n a. 1 згадка в Instagram story \n b. 1 пост в LinkedIn \nc. Пост дайджест у Telegram каналі',
    },
    {
      title: 'Логотип та згадка про компанію у постпроєктному відео',
      text: 'Логотип та згадка про компанію у постпроєктному відео —  Додавання логотипа компанії на відео, яке буде створено та виставлено в інстаграмі після успішного завершення Хакатону. Вказівка на компанію та її внесок у захід також буде присутня в цьому відео.',
    },
    {
      title: 'Транслювання відео компанії під час Хакатону',
      text: 'Нетворкінг є засобом зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для студентів знайти роботу або стажування, а для компаній - надати ці можливості. Час проведення орієнтовно година.',
    },
    {
      title: 'Розміщення банера на місці події',
      text: 'Нетворкінг є засобом зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для студентів знайти роботу або стажування, а для компаній - надати ці можливості. Час проведення орієнтовно година.',
    },
    {
      title: 'Логотип на сайті проєкту',
      text: 'Нетворкінг є засобом зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для студентів знайти роботу або стажування, а для компаній - надати ці можливості. Час проведення орієнтовно година.',
    },
    {
      title: 'Поширення інформації про вакансії внутрішніми каналами BEST Lviv',
      text: 'Нетворкінг є засобом зустрічі між учасниками, організаторами та представниками компанії в неформальній обстановці, що може стати відмінною нагодою для студентів знайти роботу або стажування, а для компаній - надати ці можливості. Час проведення орієнтовно година.',
    }
  ]
}


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
  }


  return (
    <div className={styles.popupWrapper} onClick={closePopup}>
      <div className={styles.popupContent}>
        <div onClick={closePopup} className={styles.closeBtnWrapper}><img src={ArrowIcon} className={styles.arrowIcon} /></div>
        <div className={styles.offerTitle}>{offerTitle}</div>
        <div className={styles.desktopWrapper}>
          {offer.map((content, index) => {
            return index % 2 === 0 ? (<div className={styles.boxTitle} key={index}>{content}</div>) : (<div className={styles.boxText} key={index}>{content}</div>)
          })}
        </div>
      </div>
    </div>);
}

export default OfferPopup;
