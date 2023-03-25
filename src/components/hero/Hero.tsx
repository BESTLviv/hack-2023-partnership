import { ReactComponent as IconMenu } from '../../assets/images/hero/logo-hack.svg';

import style from '../hero/Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <div className={style.hero}>
      <div>
        <IconMenu className={style.hack_logo}/>
      </div>
      <div className={style.event_date}>
        27-28 травня
      </div>
      <div>
        <button className={style.become_partner_btn}>Стати партнером</button>
      </div>
    </div>
  );
}