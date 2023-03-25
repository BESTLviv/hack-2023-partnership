import Package from './components/Package';
import HeaderText from '../../../../components/HeaderText';
import styles from './Offer.module.scss';

const Offer = () => {
  const offerObj = {
    title: 'Базовий пакет',
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
      price: 200,
      list: ['Розсилка вакансій у Telegram боті', 'Доступ до бази CV учасників'],
    },
    {
      title: 'initiator',
      price: 700,
      list: [
        'Надання ментора та судді',
        'Проведення воркшопу або тренінгу (25-45 хв)',
        'Лого на футболках',
        'Номінація від компанії',
        'Пост про компанію в Instagram',
      ],
    },
    {
      title: 'Get to know',
      price: 200,
      list: ['World cafe', 'Інтерактивні Insta-stories', 'Творчість без меж'],
    },
  ];

  return (
    <div className={styles.offer_wrapper}>
      <HeaderText text="Пропозиція" />
      <div className={styles.offer_empty_space} />
      <Package title={offerObj.title} list={offerObj.list} price={offerObj.price} isMain />
      <p className={styles.offer_text_mobile}>
        Партнерам попередніх хакатонів -5%
        <br />
        Базовий + 2 опції - 50$
        <br />
        Базовий + 3 опції -100$
        <br />
      </p>
      <div className={styles.offer_options_wrapper}>
        {optionalPackages.map((packageItem, index) => (
          <Package
            key={index}
            title={packageItem.title}
            list={packageItem.list}
            price={packageItem.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
