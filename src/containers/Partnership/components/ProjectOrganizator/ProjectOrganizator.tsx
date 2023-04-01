import { Box, Flex } from '@chakra-ui/react';
import HeaderText from '../../../../components/HeaderText';

import BestLogo from '../../../../assets/images/organiser/best_logo.svg';
import EuropeMap from '../../../../assets/images/organiser/europe_map.svg';

import style from '../ProjectOrganizator/ProjectOrganizator.module.scss';
import BestData, { BestDataProps } from './BestData';

const ProjectOrganizator: React.FC = () => {
  const bestData: BestDataProps[] = [
    {count: 86, subject: 'Осередків'},
    {count: 30, subject: 'Країн'},
    {count: 34, subject: 'Роки досвіду'}
  ]; 

  return (
    <>
      <HeaderText text="Організатор проєкту"/>
      <Flex flexDirection={'column'} alignItems={'center'} marginTop="75px">
        <Flex flexDirection={['column', 'column', 'row']} justifyContent={'center'} alignItems={'center'} marginBottom="75px">
          <img src={BestLogo} alt="BEST Logo" style={{background: 'transparent', display: 'block'}} width={250}/>
          <Box className={style.projorg_best_description}>
            <span className={style.projorg_BEST}>BEST</span> — це неприбуткова громадська організація, яка об’єднує студентів технічних спеціальностей для забезпечення обміну знаннями та співпраці компаній, університетів та студентів Європи.
          </Box>
        </Flex>
        <Flex flexDirection={'row'} position="relative" width={'800px'}>
          <img src={EuropeMap} alt="Europe Map" width={550}/>
          <Flex flexDirection={'row'} position={'absolute'} top={'50px'} left="50%">
            {bestData.map((bd, i) => <BestData key={i} count={bd.count} subject={bd.subject}/>)}  
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default ProjectOrganizator;