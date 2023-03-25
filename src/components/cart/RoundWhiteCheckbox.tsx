// RoundWhiteCheckbox.tsx
import React from 'react';
import styles from './RoundWhiteCheckbox.module.scss';

interface RoundWhiteCheckboxProps {
  id: string;
  name: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelText?: string;
}

const RoundWhiteCheckbox = ({id,name,checked,onChange,labelText} : RoundWhiteCheckboxProps) => {
  return (
    <label className={styles.roundWhiteCheckbox}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
      {labelText && <span className={styles.labelText}>{labelText}</span>}
    </label>
  );
};

export default RoundWhiteCheckbox;
