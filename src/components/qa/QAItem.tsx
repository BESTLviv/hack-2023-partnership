import { Flex } from '@chakra-ui/layout';
import { useState } from 'react';
import { ReactComponent as InfoIcon } from '../../assets/images/qa/info.svg';

import style from '../qa/QAItem.module.scss';

interface QAItemProps {
  question: string;
  answer: string;
}

// eslint-disable-next-line react/prop-types
const QAItem: React.FC<QAItemProps> = ({question, answer}) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <Flex onClick={() => setIsOpened(!isOpened)} className={style.qa_item} flexDirection={'row'}>
      <InfoIcon className={style.qa_item_icon}/>
      <Flex className={style.qa_qa} flexDirection={'column'}>
        <span className={style.qa_item_question}>{question}</span>
        {
          isOpened ? (
            <>
              <hr className={style.qa_item_hr}/>
              <span className={style.qa_item_answer}>{answer}</span>
            </>
          ) : null
        }
      </Flex>
    </Flex>
  );
}

export default QAItem;