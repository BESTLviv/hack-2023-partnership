import React from 'react';
import styles from './HeaderText.module.scss';
import { Text } from '@chakra-ui/react';

interface Props {
  text: string;
}

const HeaderText = ({ text }: Props) => {
  return (
    <Text fontSize={['lg', '2xl', '4xl']} className={styles.headerText}>
      {text}
    </Text>
  );
};
export default HeaderText;
