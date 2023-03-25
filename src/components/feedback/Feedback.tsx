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
    <div className="div">
      <h1 className="title">відгуки партнерів</h1>

      <div
        className={`${style.feedback_grid} ${style.container}`}
      >
         <div className={`bordered_block ${style.first}`}>A</div>
        
         <div className={style.secondContainer}>
          <div className={`bordered_block ${style.second}`}>B</div>
          <div className={`bordered_block ${style.third}`}>C</div>
         </div>


      </div>

      <Flex justify="space-between" align="center" className={style.feedback}>
        hello
      </Flex>

    </div>
  );
};

export default Feedback;
