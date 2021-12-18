import classNames from 'classnames';
import React from 'react';

import ButtonInterface from '../../interfaces/buttonInterface';
import styles from './Button.module.scss';

const Button = ({ btnText, btnType, btnClass, btnClick }: ButtonInterface) => {
  return (
    <button
      className={classNames(btnClass && styles[btnClass], styles['btn'])}
      onClick={btnClick}
      type={btnType}>
      {btnText}
    </button>
  );
};

export default Button;
