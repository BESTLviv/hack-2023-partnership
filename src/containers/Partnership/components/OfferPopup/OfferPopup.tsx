import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import styles from './OfferPopup.module.scss';
import ArrowIcon from '../../../../assets/icons/arrow.svg';
import { ordersId, setPopupTitle } from '../../../../redux/slices/orderSlice/orderSlice';
import { useTranslation } from 'react-i18next';

type OffersType = {
  [key in ordersId]: {
    title: string;
    text: string;
  }[];
}

const OfferPopup = () => {
  const offerTitle = useSelector((state: RootState) => state.order.popupTitle);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const OFFERS: OffersType = t('service_packages.OFFERS_details', { returnObjects: true });

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
