import {HamburgerIcon} from '@chakra-ui/icons';
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
import AnimationWrapper from "../../Animations";
import useMediaQuery from "../../hooks/useMediaQuery";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Header = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const matches = useMediaQuery("(max-width: 769px)")
    const menuItems = [
        {label: 'Про нас', href: '#aboutUs'},
        {label: 'Запитання', href: '#questions'},
        {label: 'Контакти', href: '#contacts'}
    ];
    const scrollToMiddleOffset = (element: HTMLElement) => {
        const elementRect = element.getBoundingClientRect();
        const offset = elementRect.top + elementRect.height / 2;
        return offset;
    };
    return (
        <div style={{position: 'relative', zIndex: 100}}>
            <AnimationWrapper alwaysVisible={true} duration={1} animationType={!matches ? 'slideDown' : 'fadeIn'}>
                <Flex justify="space-between" align="center" className={style.header}>
                    <Box display={{base: 'block', md: 'none'}} className={style.header_mobile}>
                        <HamburgerIcon w={30} h={30} onClick={onOpen} className={style.hamburger_icon}/>
                    </Box>
                    <Box display={{base: 'none', md: 'flex'}} className={style.header_desktop}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>

                            {menuItems.map((item) => (
                                <AnchorLink key={item.href} href={item.href} offset={300}>
                                    <Box key={item.href} as="p" p={2}>
                                        {item.label}
                                    </Box>
                                </AnchorLink>

                            ))}
                        </div>
                        <AnchorLink href={'#orders'} offset={200}>
                            <Button text="Стати партнером"/>
                        </AnchorLink>

                    </Box>
                    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                        <DrawerContent className={style.drawer_content}>
                            <DrawerBody className={style.drawer_body}>
                                {menuItems.map((item) => (
                                    <Box key={item.href} as="p" onClick={onClose}
                                         className={style.drawer_link}>
                                        <AnchorLink href={item.href} offset={200}>

                                            {item.label}
                                        </AnchorLink>

                                    </Box>

                                ))}
                                <Box as="p" onClick={onClose}
                                     className={style.drawer_link}>
                                    <AnchorLink onClick={onClose} href={'#orders'} offset={300}>
                                        Стати партнером
                                    </AnchorLink>
                                </Box>

                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            </AnimationWrapper>

        </div>


    );
};

export default Header;
