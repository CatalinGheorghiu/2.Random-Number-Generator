export default interface ButtonInterface {
  btnText: string;
  btnType: 'button' | 'submit' | 'reset';
  btnClass?: string;
  btnClick: () => void;
}
