import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import QA from '../../components/qa/QA';
import CarouselSection from '../../scenes/CarouselSection/CarouselSection';
import Offer from './components/Offer';
import Cart from '../../components/cart/Cart'
import Team from '../../components/team/Team';
import StatisticSection from '../../scenes/StatisticSection/StatisticSection';
import Footer from './components/Footer';
import ProjectOrganizator from './components/ProjectOrganizator/ProjectOrganizator';
import Feedback from '../../components/feedback/Feedback';
import styles from './Partnership.module.scss';
import ForPartners from './components/ForPartners';
import OfferPopup from './components/OfferPopup';
import SmothScroll from '../../components/SmothScroll/SmothScroll';
import Topic from './components/Topic/Topic';
import Companies from './components/Companies';

import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import AudiencePopup from './components/AudiencePopup';
import useMediaQuery from "../../hooks/useMediaQuery";


const Partnership = () => {
    const popupActive = useSelector((state: RootState) => state.order.popupTitle);
    const audiencePopupActive = useSelector((state: RootState) => state.order.audiencePopup);
    const {matches} = useMediaQuery("(max-width: 769px)")
    const Content = () => <div className={styles.contentWrapper}>
        <Hero/>
        <CarouselSection/>
        <Topic/>
        <ForPartners/>
        <StatisticSection/>
        <Companies/>
        <Feedback/>
        <Offer/>
        <Cart/>
        <QA/>
        <ProjectOrganizator/>
        <Team/>
    </div>
    return (
        <div className={`${styles.container} ${popupActive ? styles.overflowHidden : ''}`}>
            <Header/>
            {matches ?
                <Content/>
                :
                <SmothScroll>

                    <Content/>

                </SmothScroll>
            }

            {popupActive ? <OfferPopup/> : null}
            {audiencePopupActive ? <AudiencePopup/> : null}
            <Footer/>
        </div>
    )
};

export default Partnership;

