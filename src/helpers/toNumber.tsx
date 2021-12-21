const toNumber = (value: string | number) => {
  if (typeof value === 'number') return value;
  return parseInt(value.replace(/[^\d]+/g, ''));
};

export default toNumber;
