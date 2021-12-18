import React from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

const App = () => {
  return (
    <div className={styles.generator}>
      <div className={styles['generator__container']}>
        <div className={styles['generator__random-number']}>
          <p>Random number: 23</p>
        </div>
        <div className={styles['generator__inputs-container']}>
          <Input
            id="input-2"
            inputClass="input-1"
            inputText="Min:"
            inputType="number"
            minValue="0"
          />
          <Input
            id="input-2"
            inputClass="input-2"
            inputText="Max:"
            inputType="number"
            minValue="1"
          />
        </div>
        <Button
          btnClass="generateBtn"
          btnClick={() => console.log('It works')}
          btnText="Generate random number"
          btnType="button"
        />
      </div>
    </div>
  );
};

export default App;
