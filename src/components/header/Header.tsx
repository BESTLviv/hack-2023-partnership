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

import style from './Header.module.scss';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const menuItems = [
    { label: 'Про нас', href: '/' },    
    { label: 'Запитання', href: '/' },  
    { label: 'Контакти', href: '/' }    
  ];

  return (
    
    <Flex justify="space-between" align="center" className={style.header}>
      <Box display={{ base: 'block', md: 'none' }} className={style.header_mobile}>
        <HamburgerIcon w={30} h={30} onClick={onOpen} className={style.hamburger_icon} />
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} className={style.header_desktop}>
        <Box display={'flex'} alignItems="center">
          {menuItems.map((item) => (
            <Box key={item.href} as="a" href={item.href} p={2}>
              {item.label}
            </Box>
          ))}
        </Box>
              <Button linkTo="#" text="Стати партнером"/>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerContent className={style.drawer_content}>
          <DrawerBody className={style.drawer_body}>
            {menuItems.map((item) => (
              <Box key={item.href} as="a" href={item.href} onClick={onClose} className={style.drawer_link}>
                {item.label}
              </Box>
            ))}
             <a href='#' className={style.drawer_link}>Стати партнером</a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Header;
