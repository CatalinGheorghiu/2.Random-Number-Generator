import React from 'react';

import InputInterface from '../../interfaces/inputInterface';
import styles from './Input.module.scss';

const Input = ({
  id,
  inputClass,
  inputText,
  inputType,
  minValue,
  maxValue,
}: InputInterface) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor={id} className={inputClass && styles[inputClass]}>
        {inputText}
      </label>
      <input
        id={id}
        type={inputType}
        min={minValue}
        max={maxValue}
        pattern="[0-9]+"
      />
    </div>
  );
};

export default Input;
