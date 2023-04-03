import {Flex} from '@chakra-ui/react';

import AnnaHukSvg from '../../assets/images/team/anna_huk.png';
import BohdanVivcharSvg from '../../assets/images/team/bohdan_vivchar.png';
import SofiaLevSvg from '../../assets/images/team/sofia_lev.png';
import HeaderText from '../HeaderText';

import Teammate from './Teammate';
import AnimationWrapper from "../../Animations";

const Team: React.FC = () => {
    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>

            <HeaderText text="Контакти"/>
            <div style={{marginTop: '40px'}}/>
            <Flex id={'contacts'} flexDirection={'row'} gap={'100px'}
                  alignItems={'stretch'} justifyContent={'center'}
                  flexWrap={'wrap'}>
                <Teammate
                    avatarSrc={AnnaHukSvg}
                    name="Анна Гук"
                    position="Відповідальна за корпоративні зв'язки"
                    number="+380686814667"
                    email="anna.huk.best@gmail.com"
                />
                <Teammate
                    avatarSrc={SofiaLevSvg}
                    name="Софія Лев"
                    position={'\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b Головна \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b організаторка'}
                    number="+380508895899"
                    email="levsophia11@gmail.com"
                />
                <Teammate
                    avatarSrc={BohdanVivcharSvg}
                    name="Богдан Вівчар"
                    position="Відповідальний за корпоративні зв'язки"
                    number="+380987567648"
                    email="bohdanvivchar.best@gmail.com"
                />
            </Flex>

        </AnimationWrapper>

    );
}

export default Team
;
