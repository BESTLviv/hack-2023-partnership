import { useDispatch } from 'react-redux';
import styles from './AudiencePopup.module.scss';
import ArrowIcon from '../../../../assets/icons/arrow.svg';
import { setAudiencePopup } from '../../../../redux/slices/orderSlice/orderSlice';
import { useTranslation } from 'react-i18next';

interface Item {
  title: string;
  list: string[];
}

const AudiencePopup = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const AUDIENCE_INFO: Array<Item> = t('target_audience.AUDIENCE_INFO', { returnObjects: true });

  const closePopup = () => {
    document.body.style.overflow = '';
    dispatch(setAudiencePopup(false));
  };

  return (
    <div className={styles.popupWrapper} onClick={closePopup}>
      <div className={styles.popupContent}>
        <div onClick={closePopup} className={styles.closeBtnWrapper}>
          <img src={ArrowIcon} className={styles.arrowIcon} />
        </div>
        <div className={styles.title}>{t('target_audience.topic')}</div>
        <div className={styles.contentWrapper}>
          {AUDIENCE_INFO.map((item: Item) => {
            return (
              <div key={item.title}>
                <p className={styles.contentTitle}>{item.title}</p>
                <ul>
                  {item.list.map((listItem, index) => (
                    <li key={index} className={styles.contentText}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AudiencePopup;
