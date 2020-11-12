// const formatValue = (value: number): string =>
//   Intl.NumberFormat().format(value); // TODO

// export default formatValue;

function formatValue(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default formatValue;
