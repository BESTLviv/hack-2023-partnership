import { Flex } from '@chakra-ui/react';

import AnnaHukSvg from '../../assets/images/team/anna_huk.svg';
import BohdanVivcharSvg from '../../assets/images/team/bohdan_vivchar.svg';
import SofiaLevSvg from '../../assets/images/team/sofia_lev.svg';

import style from '../team/Team.module.scss';
import Teammate from './Teammate';

const Team: React.FC = () => {
  return (
    <>
      <h2 className={style.team_header}>Контакти</h2>
      <a className={style.team_anna} href="static/media/anna_huk.51d491cd47c7801a65fecd61b0fa6cba.svg"></a>
      <Flex flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'}>
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
          position={`\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b Головна \b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b організаторка`}
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
    </>
  );
}

export default Team;