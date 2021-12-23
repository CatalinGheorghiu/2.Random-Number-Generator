import React, { useState } from 'react';

import styles from './App.module.scss';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

const App = () => {
  const [values, setValues] = useState({
    inputValue1: 0,
    inputValue2: 1,
  });
  const [randomNumber, setRandomNumber] = useState(0);
  const [error, setError] = useState('');

  function generateRandomNumber() {
    try {
      const min = Math.ceil(+values.inputValue1);
      const max = Math.floor(+values.inputValue2);
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      if (min >= max)
        throw new Error(
          "The min value can't be greater or equal to the max" + ' value!',
        );

      setError('');
      setRandomNumber(randomNumber);
    } catch (e) {
      if (typeof e === 'string') {
        setError(e);
      } else if (e instanceof Error) {
        setError(e.message);
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reg = new RegExp('^[0-9]+$');
    if (reg.test(event.target.value)) {
      setValues((prevState) => {
        return { ...prevState, [event.target.id]: event.target.value };
      });
    }
  };

  return (
    <div className={styles.generator}>
      <div className={styles['generator__container']}>
        <div className={styles['generator__random-number']}>
          <p>Random number: {randomNumber}</p>
        </div>
        <div className={styles['generator__inputs-container']}>
          <Input
            id="inputValue1"
            inputClass="inputValue1"
            inputText="Min:"
            inputType="number"
            minValue="0"
            inputValue={+values.inputValue1}
            inputOnChange={handleChange}
          />
          {error && <span className={styles.error}>{error}</span>}
          <Input
            id="inputValue2"
            inputClass="inputValue2"
            inputText="Max:"
            inputType="number"
            minValue="1"
            inputValue={+values.inputValue2}
            inputOnChange={handleChange}
          />
        </div>
        <Button
          btnClass="generateBtn"
          btnClick={generateRandomNumber}
          btnText="Generate random number"
          btnType="button"
        />
      </div>
    </div>
  );
};

export default App;
