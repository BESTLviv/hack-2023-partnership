import {Flex} from '@chakra-ui/react';

import AnnaHukSvg from '../../assets/images/team/anna_huk.svg';
import BohdanVivcharSvg from '../../assets/images/team/bohdan_vivchar.svg';
import SofiaLevSvg from '../../assets/images/team/sofia_lev.svg';
import HeaderText from '../HeaderText';

import Teammate from './Teammate';

const Team: React.FC = () => {
    return (
        <div>
            <HeaderText text="Контакти"/>
            <Flex flexDirection={'row'} gap={'100px'} alignItems={'stretch'} justifyContent={'center'}
                  flexWrap={'wrap'} mt="40px">
                <Teammate
                    avatarSrc={AnnaHukSvg}
                    name="Анна Гук"
                    position="Відповідальна за корпоративні зв'язки"
                    number="+380987567648"
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
        </div>
    );
}

export default Team;
