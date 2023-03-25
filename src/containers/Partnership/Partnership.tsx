import Header from '../../components/header/Header';
import HeaderText from '../../components/HeaderText';
import Hero from '../../components/hero/Hero';
import QA from '../../components/qa/QA';
import CarouselSection from '../../scenes/CarouselSection/CarouselSection';
import StatisticSection from '../../scenes/StatisticSection/StatisticSection';
import Cart from '../../components/cart/Cart';
import Footer from './components/Footer';

const Partnership = () => {
  return (
    <div className="test">
      <Header />
      <Hero />
      <CarouselSection />
      <HeaderText text={'для партнерів це:'} />
      <QA />
      <Cart />
      <StatisticSection/>
      <Footer />
    </div>
  );
};

export default Partnership;
