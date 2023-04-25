import { Flex } from '@chakra-ui/layout';
import React from 'react';

import style from '../qa/QA.module.scss';
import HeaderText from '../HeaderText';
import QAItem from './QAItem';
import AnimationWrapper from "../../Animations";
import { useTranslation } from 'react-i18next';

interface QA {
    question: string,
    answer: string
}

const QA: React.FC = () => {
    const { t } = useTranslation();
    const QAs: Array<QA> = t('QA', { returnObjects: true });
    return (
        <AnimationWrapper id={'questions'} delay={0.5} duration={1} animationType={'fadeIn'}>

            <Flex className={style.qa_block} flexDirection={'column'} alignItems={'center'} w={'100%'}>
                <HeaderText text="Q/A" />
                <div className={style.qa_qas}>
                    {QAs.map((qa, index) => {
                        return (
                            <QAItem
                                key={index}
                                question={qa.question}
                                answer={qa.answer} />
                        );
                    })}
                </div>
            </Flex>
        </AnimationWrapper>

    );
}

export default QA;
