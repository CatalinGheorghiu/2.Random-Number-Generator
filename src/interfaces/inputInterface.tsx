import React from 'react';

export default interface InputInterface {
  id: string;
  inputClass?: string;
  inputText?: string;
  inputType: 'number' | 'tel';
  inputValue: number;
  minValue?: string;
  maxValue?: string;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
