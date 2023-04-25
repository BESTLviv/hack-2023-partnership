import {motion} from 'framer-motion';
import {ReactComponent as IconMenu} from '../../assets/images/hero/logo-hack.svg';

import style from '../hero/Hero.module.scss';
import AnimationWrapper from "../../Animations";
import {useTranslation} from "react-i18next";

const Hero: React.FC = () => {
    const {t} = useTranslation()
    return (
        <AnimationWrapper className={style.hero} duration={1} animationType={'zoomIn'}>
            <div >

                <div>
                    <IconMenu className={style.hack_logo}/>
                </div>
                <div className={style.event_date}>
                    {t('da')}

                </div>
            </div>

        </AnimationWrapper>

    );
}

export default Hero;
