import {motion} from 'framer-motion';
import {ReactComponent as IconMenu} from '../../assets/images/hero/logo-hack.svg';

import style from '../hero/Hero.module.scss';
import AnimationWrapper from "../../Animations";

const Hero: React.FC = () => {
    return (
        <AnimationWrapper className={style.hero} duration={1} animationType={'zoomIn'}>

            <div>
                <IconMenu className={style.hack_logo}/>
            </div>
            <div className={style.event_date}>
                27-28 травня
            </div>
            <div>
                <a href="#" className={style.become_partner_btn}>Стати партнером</a>
            </div>
        </AnimationWrapper>

    );
}

export default Hero;
