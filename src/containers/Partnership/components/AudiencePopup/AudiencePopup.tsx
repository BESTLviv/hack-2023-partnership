import { useDispatch } from 'react-redux';
import styles from './AudiencePopup.module.scss';
import ArrowIcon from '../../../../assets/icons/arrow.svg';
import { setAudiencePopup } from '../../../../redux/slices/orderSlice/orderSlice';

const AUDIENCE_INFO = [
  {
    title: 'Загальна Інформація:',
    list: [
      'Середній рівень англійської мови: B1',
      '52% учасників мають досвід роботи за спеціальністю',
      '92% учасників програмісти за фахом'
    ]
  },
  {
    title: 'Спеціальності:',
    list: [
      'Інженерія програмного забезпечення',
      'Комп’ютерні науки',
      'Інтернет речей',
      'Системи штучного інтелекту',
      'Кібербезпека',
      'Системний аналіз'
    ]
  },
  {
    title: 'Знання мов програмування:',
    list: [
      'Java - 7%',
      '.Net - 25%',
      'Web технології - 40%',
      'Python - 16%',
      'Інші - 12%'
    ]
  },
  {
    title: 'Статистика по курсах університету:',
    list: [
      'Ⅰ курс - 30%',
      'Ⅱ курс - 33%',
      'Ⅲ курс - 16%',
      'Ⅳ курс - 15%',
      'V - 6%'
    ]
  }
]


const AudiencePopup = () => {
  const dispatch = useDispatch();

  const closePopup = () => {
    document.body.style.overflow = '';
    dispatch(setAudiencePopup(false));
  }


  return (
    <div className={styles.popupWrapper} onClick={closePopup}>
      <div className={styles.popupContent}>
        <div onClick={closePopup} className={styles.closeBtnWrapper}><img src={ArrowIcon} className={styles.arrowIcon} /></div>
        <div className={styles.title}>Інформація про цільову аудиторію BEST:Hackathon</div>
        <div className={styles.contentWrapper}>
          {AUDIENCE_INFO.map((item) => {
            return (
              <div key={item.title}>
                <p className={styles.contentTitle} >{item.title}</p>
                <ul>
                  {item.list.map((listItem, index) => <li key={index} className={styles.contentText}>{listItem}</li>)}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>);
}

export default AudiencePopup;