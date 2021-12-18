export default interface InputInterface {
  id: string;
  inputClass?: string;
  inputText?: string;
  inputType: 'number' | 'text';
  minValue?: string;
  maxValue?: string;
}
