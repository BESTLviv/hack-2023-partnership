import Header from '../../components/header/Header';
import HeaderText from '../../components/HeaderText';
import CarouselSection from '../../scenes/CarouselSection/CarouselSection';
import {Hero} from '../../components/hero/Hero';
import StatisticSection from "../../scenes/StatisticSection/StatisticSection";

const Partnership = () => {
    return (
        <div className="test">
            <Header/>
            <Hero/>
            <CarouselSection/>
            <HeaderText text={'для партнерів це:'}/>
            <StatisticSection/>
        </div>
    );
};

export default Partnership;
