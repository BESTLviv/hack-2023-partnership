import Header from '../../components/header/Header';
import HeaderText from '../../components/HeaderText';
import CarouselSection from '../../scenes/CarouselSection/CarouselSection';
import { Hero } from '../../components/hero/Hero';
import Cart from '../../components/cart/Cart'

const Partnership = () => {
  return (
    <div className="test">
      <Header />
      <Hero />
      <CarouselSection />
      <HeaderText text={'для партнерів це:'} />
      <Cart />
    </div>
  );
};

export default Partnership;
