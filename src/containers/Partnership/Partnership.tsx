import Header from '../../components/header/Header';
import HeaderText from '../../components/HeaderText';
import Hero from '../../components/hero/Hero';
import QA from '../../components/qa/QA';
import CarouselSection from '../../scenes/CarouselSection/CarouselSection';
import Offer from './components/Offer';
import Cart from '../../components/cart/Cart'
import Team from '../../components/team/Team';
import StatisticSection from '../../scenes/StatisticSection/StatisticSection';
import Footer from './components/Footer';

const Partnership = () => {
  return (
    <div className="test">
      <Header />
      <Hero />
      <CarouselSection />
      <HeaderText text={'для партнерів це:'} />
      <QA />
      <Offer />
      <Cart />
      <StatisticSection/>
      <Team />
      <Footer />
    </div>
  );
};

export default Partnership;
