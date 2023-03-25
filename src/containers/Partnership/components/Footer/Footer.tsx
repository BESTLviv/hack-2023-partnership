import styles from '../Footer/Footer.module.scss';
import BestLogo from '../../../../assets/images/logo/logo_best_footer.svg';
import { Facebook,
    In,
    Inst,
    Telegram, } from '../../../../assets/index';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.year}>2023</p>
      <img src={BestLogo} alt="best logo" className='bestLogo'/>
      <div>
         <img src={Facebook} />
         <img src={Inst} />
         <img src={In} />
         <img src={Telegram} />
      </div>
    </div>
  );
};
export default Footer;
