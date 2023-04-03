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
import { useState } from 'react';
import SmothScroll from "../../components/SmothScroll/SmothScroll";


const OFFERS = {
  Initiator: [
    {
      title: 'Надання ментора та судді',
      text: 'Ментор - це людина, яка має досвід та знання в галузі, в якій працює команда. Він допомагає учасникам розв\'язати проблеми, які виникають під час розробки проєкту. \n Суддя - це людина, що оцінює проєкти, які були розроблені командами під час хакатону. Він оцінює якість реалізації, відповідність тематиці хакатону, інноваційність, практичну цінність та інші параметри.',
    },
    {
      title: 'Проведення воркшопу або тренінгу',
      text: 'Воркшоп - це тип інтерактивного навчання, де учасники виконують низку навчальних дій. Наприклад, це може бути демонстраційний показ, практичне заняття або дискусійний клуб. \n Тренінг - це певний вид навчання, який спрямований на підвищення рівня знань та навичок учасників. Його головною метою є навчання технік, прийомів та стратегій, які можуть бути корисними для вирішення конкретних завдань. Наприклад, тренінг з технік комунікації, управління проєктами, web технологій і т.д..',
    },
    {
      title: 'Лого на футболках',
      text: 'На спинах футболок всіх присутніх на заході людей, які вони отримають при відкритті хакатону, буде надруковано лого Вашої та інших компаній',
    },
    {
      title: 'Номінація від компанії',
      text: 'Ви можете обрати власну номінацію на змаганнях, яка буде закріплена за Вашою компанією. Переможця у ній визначає представник компанії та нагороджує призом. Номінація може стосуватись використання певних технологій або інших особливостей роботи команди на Ваш вибір.',
    },
    {
      title: 'Пост про компанію в Instagram',
      text: 'Ми опублікуємо пост про вашу компанію на нашій сторінці в Instagram, який буде доступний назавжди. В цьому пості ми надамо інформацію про вашу компанію та зазначимо, що ви є нашим основним партнером на цьому хакатоні.',
    }
  ]
}


const Partnership = () => {
  const [popupActive, setPopupActive] = useState(false);

  return (
    <div className={`${styles.container} ${popupActive ? styles.overflowHidden : ''}`} >
      <Header />
      <SmothScroll>

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
      </SmothScroll>
      {/* <OfferPopup offerTitle='Initiator — обмежена пропозиція (лише 3 компанії зможуть придбати) (на сайті буде видно, скільки таких пакетів залишилось, коли всі скуплять то пакет затемниться і стане недоступний для вибору)
' offer={OFFERS.Initiator} /> */}
      <Footer />
    </div>
  )};

export default Partnership;