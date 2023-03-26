import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

import Button from '../button/Button';

import style from './Feedback.module.scss';
// import styles from '../../App.scss'
const Feedback = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    { label: 'Про нас', href: '/' },
    { label: 'Запитання', href: '/' },
    { label: 'Контакти', href: '/' }
  ];

  return (
    <div className={style.feedbeckContainer}>
      <h1 className="title">відгуки партнерів</h1>
      <div className="feedback_flex_wrapper">

        <div
          className={`feedback_container`}
        >
          <div className="company_feedback">
            <h3 className="feedback_title">Tsukat</h3>
            <p>
            На заході був проведений ефективний нетворкінг, який дав перші результати майже одразу, організатори швидко реагували на зміни та оформили чудовий звіт. Загалом залишились позитивні враження.

            </p>
          </div>  

          <div className={`others_flex`}>

            <div className="company_feedback">
            <h3 className="feedback_title">OSF DIGITAl</h3>

              <p>
              Хороший івент, для нас це був цікавий досвід.
              </p>
            </div>

            <div className="company_feedback">
            <h3 className="feedback_title">Keepit</h3>

              <p>
              Подія нам дуже сподобалась і надихнула.
              </p>
            </div>

          </div>
        </div>
      </div>

      <Flex justify="space-between" align="center" className={style.feedback}>
        hello
      </Flex>

    </div>
  );
};

export default Feedback;
