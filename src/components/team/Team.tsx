import { Flex } from '@chakra-ui/react';

import HeaderText from '../HeaderText';

import Teammate from './Teammate';
import AnimationWrapper from "../../Animations";
import { useTranslation } from 'react-i18next';

interface Teammate {
    name: string;
    position: string;
    number: string;
    email: string;
}

const Team: React.FC = () => {
    const { t } = useTranslation();
    const team: Array<Teammate> = t('team', { returnObjects: true });

    return (

        <AnimationWrapper delay={0.5} duration={1} animationType={'fadeIn'}>
            <HeaderText text={t('').toString()} />
            <div style={{ marginTop: '40px' }} />
            <Flex id={'contacts'} flexDirection={'row'} gap={'100px'}
                alignItems={'stretch'} justifyContent={'center'}
                flexWrap={'wrap'}>
                {team.map((item, index) => {
                    return (<Teammate
                        key={index}
                        name={item.name}
                        position={item.position}
                        number={item.number}
                        email={item.email}
                    />);
                })}
            </Flex>
        </AnimationWrapper>

    );
}

export default Team;
