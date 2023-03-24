import React from 'react';
import styles from './HeaderText.module.scss';

interface Props {
  text: string;
}

const HeaderText = ({ text }: Props) => {
  return <div className={styles.headerText}>{text}</div>;
};
export default HeaderText;
