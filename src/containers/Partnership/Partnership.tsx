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

const Partnership = () => {
  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>
        <Hero />
        <CarouselSection />
        <ForPartners />
        <StatisticSection />
        {/* нас підтримували */}
        <Feedback />
        <Offer />
        <Cart />
        <QA />
        <ProjectOrganizator />
        <Team />
      </div>
      <Footer />
    </>
  );
};

export default Partnership;
