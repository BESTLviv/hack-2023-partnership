import {Flex} from '@chakra-ui/layout';
import React from 'react';

import style from '../qa/QA.module.scss';
import HeaderText from '../HeaderText';
import QAItem from './QAItem';
import AnimationWrapper from "../../Animations";

const QA: React.FC = () => {
    return (
        <AnimationWrapper id={'questions'}  delay={0.5} duration={1} animationType={'fadeIn'}>

            <Flex  className={style.qa_block} flexDirection={'column'} alignItems={'center'} w={'100%'}>
                <HeaderText text="Q/A"/>
                <div className={style.qa_qas}>
                    <QAItem
                        question="Чи буде призупинено захід у випадку вимкнення електроенергії?"
                        answer="Хакатон не буде зупинятись, електрохарчування буде забезпечуватись генератором"
                    />
                    <QAItem
                        question="Чи буде укриття, відповідне за розміром для всіх учасників?"
                        answer="Так, у разі повітряної тривоги організатори проведуть усіх учасників до укриття"
                    />
                    <QAItem
                        question="Чи буде відтерміновано кінець хакатону на час повітряної тривоги?"
                        answer="В укритті будуть усі необхідні умови для продовження роботи, тому завершення хакатону буде за графіком"
                    />
                </div>
            </Flex>
        </AnimationWrapper>

    );
}

export default QA;
