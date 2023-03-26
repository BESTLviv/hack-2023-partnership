import styles from '../Footer/Footer.module.scss';
import BestLogo from '../../../../assets/images/logo/logo_best_footer.svg';
import { Facebook, In, Inst, Telegram } from '../../../../assets/index';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.year}>2023</p>
      <img src={BestLogo} alt="best logo" className={styles.bestLogo} />
      <div className={styles.socials}>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={Inst} alt="instagram" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={In} alt="linked" />
        </a>
        <a href="#" rel="noopener noreferrer" target="_blank">
          <img src={Telegram} alt="telegram" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
