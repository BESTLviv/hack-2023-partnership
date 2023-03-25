
import styles from './Package.module.scss';
import InfoButton from '../InfoButton';


type Props = {
  title: string;
  list: string[];
  price: number;
  isMain?: boolean;
};

const Package = ({ title, list, price, isMain }: Props) => {
  return (
    <div className={`${styles.package_wrapper} ${isMain && styles.package_wrapper_main}`}>
      <p className={styles.package_title}>{title}</p>
      <div className={styles.package_info_button}><InfoButton onClick={() => console.log('clicked')} /></div>
      <div className={styles.package_list_wrapper}>
        <ul>
        {list.map((item, index) => <li key={index} className={styles.package_list_text}>{item}</li>)}
        </ul>
      </div>
      <p className={styles.package_pick}>Обрати</p>
      <div className={styles.package_price}>
        <p className={styles.package_price_text}>{price}$</p>
      </div>
    </div>
  );
};

export default Package;
