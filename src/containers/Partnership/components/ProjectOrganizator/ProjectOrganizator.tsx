import { Box, Flex } from '@chakra-ui/react';
import HeaderText from '../../../../components/HeaderText';

import BestLogo from '../../../../assets/images/organiser/best_logo.svg';
import EuropeMap from '../../../../assets/images/organiser/europe_map.svg';

import style from '../ProjectOrganizator/ProjectOrganizator.module.scss';
import BestData, { BestDataProps } from './BestData';
import AnimationWrapper from "../../../../Animations";
import { useTranslation } from 'react-i18next';

const ProjectOrganizator: React.FC = () => {
    const { t } = useTranslation();
    const bestData: BestDataProps[] = [
        { count: 85, subject: t('Best.LBGs').toString() },
        { count: 30, subject: t('Best.countrys').toString() },
        { count: 34, subject: t('Best.years').toString() }
    ];

    return (
        <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>

            <HeaderText text={t('Best.organizer')} />
            <Flex flexDirection={'column'} alignItems={'center'}>
                <Flex flexDirection={['column', 'column', 'row']} justifyContent={'center'} alignItems={'center'}
                    marginBottom="75px" className={style.topWrapper}>
                    <img src={BestLogo} alt="BEST Logo" style={{ background: 'transparent', display: 'block' }}
                        className={style.bestLogo} />
                    <Box className={style.projorg_best_description}>
                        <span className={style.projorg_BEST}>BEST Lviv  (Board of European Students of Technology)</span>{t('Best.information')}
                    </Box>
                </Flex>
                <Flex className={style.mapWrapper} w={'100%'}>
                    <img src={EuropeMap} alt="Europe Map" className={style.mapImage} />
                    <Flex flexDirection={'row'} className={style.numberWrapper} top={'50px'} left="50%">
                        {bestData.map((bd, i) => <BestData key={i} count={bd.count} subject={bd.subject} />)}
                    </Flex>
                    <div className={style.emptyDiv}></div>
                </Flex>
            </Flex>
        </AnimationWrapper>

    );
}

export default ProjectOrganizator;
